import rawBRE from "hardhat";
import { MockContract } from "ethereum-waffle";
import {
  insertContractAddressInDb,
  getEthersSigners,
  registerContractInJsonDb,
} from "../helpers/contracts-helpers";
import {
  deployLendingPoolAddressesProvider,
  deployLendingPoolConfigurator,
  deployLendingPool,
  deployPriceOracle,
  deployLendingPoolCollateralManager,
  deployMockFlashLoanReceiver,
  deployWalletBalancerProvider,
  deployAaveProtocolDataProvider,
  deployLendingRateOracle,
  deployMintableErc20,
  deployFeeProvider,
  deployLendingPoolParameter,
  deployLendingPoolCore,
  deployAaveLibraries,
} from "../helpers/contracts-deployments";
import { Signer } from "ethers";
import {
  TokenContractId,
  eContractid,
  tEthereumAddress,
  AavePools,
} from "../helpers/types";
import { MintableERC20 } from "../types/MintableERC20";
import {
  ConfigNames,
  getReservesConfigByPool,
  getTreasuryAddress,
  loadPoolConfig,
} from "../helpers/configuration";
import { initializeMakeSuite } from "./helpers/make-suite";

import {
  setInitialAssetPricesInOracle,
  //deployAllMockAggregators,
  //setInitialMarketRatesInRatesOracleByHelper,
} from "../helpers/oracles-helpers";
import { DRE, waitForTx } from "../helpers/misc-utils";
import {
  initReservesByHelper,
  //configureReservesByHelper,
} from "../helpers/init-helpers";
import AaveConfig from "../markets/aave";
import { ZERO_ADDRESS } from "../helpers/constants";
import {
  getLendingPool,
  getLendingPoolConfiguratorProxy,
  getPairsTokenAggregator,
  getLendingPoolDataProviderProxy,
  getLendingPoolParameterProxy,
} from "../helpers/contracts-getters";
//import { WETH9Mocked } from '../types/WETH9Mocked';

const MOCK_USD_PRICE_IN_WEI = AaveConfig.ProtocolGlobalParams.MockUsdPriceInWei;
const ALL_ASSETS_INITIAL_PRICES = AaveConfig.Mocks.AllAssetsInitialPrices;
const USD_ADDRESS = AaveConfig.ProtocolGlobalParams.UsdAddress;
const MOCK_CHAINLINK_AGGREGATORS_PRICES =
  AaveConfig.Mocks.AllAssetsInitialPrices;
const LENDING_RATE_ORACLE_RATES_COMMON =
  AaveConfig.LendingRateOracleRatesCommon;

const deployAllMockTokens = async (deployer: Signer) => {
  const tokens: { [symbol: string]: MockContract | MintableERC20 } = {};

  const protoConfigData = getReservesConfigByPool(AavePools.proto);

  for (const tokenSymbol of Object.keys(TokenContractId)) {
    // if (tokenSymbol === 'WETH') {
    //   tokens[tokenSymbol] = await deployWETHMocked();
    //   await registerContractInJsonDb(tokenSymbol.toUpperCase(), tokens[tokenSymbol]);
    //   continue;
    // }
    let decimals = 18;

    let configData = (<any>protoConfigData)[tokenSymbol];

    if (!configData) {
      decimals = 18;
    }

    tokens[tokenSymbol] = await deployMintableErc20([
      tokenSymbol,
      tokenSymbol,
      configData ? configData.reserveDecimals : 18,
    ]);
    await registerContractInJsonDb(
      tokenSymbol.toUpperCase(),
      tokens[tokenSymbol]
    );
  }

  return tokens;
};

const buildTestEnv = async (deployer: Signer, secondaryWallet: Signer) => {
  console.time("setup");
  const aaveAdmin = await deployer.getAddress();

  const mockTokens = await deployAllMockTokens(deployer);

  const addressesProvider = await deployLendingPoolAddressesProvider(
    AaveConfig.MarketId
  );
  await waitForTx(await addressesProvider.setLendingPoolManager(aaveAdmin));

  //setting users[1] as emergency admin, which is in position 2 in the DRE addresses list
  const addressList = await Promise.all(
    (await DRE.ethers.getSigners()).map((signer) => signer.getAddress())
  );

  //await waitForTx(await addressesProvider.setEmergencyAdmin(addressList[2]));

  // const addressesProviderRegistry = await deployLendingPoolAddressesProviderRegistry();
  // await waitForTx(
  //   await addressesProviderRegistry.registerAddressesProvider(addressesProvider.address, 1)
  // );

  //fee
  const feeProviderImpl = await deployFeeProvider();

  await waitForTx(
    await addressesProvider.setFeeProviderImpl(feeProviderImpl.address)
  );

  const feeProviderImplProxy = await addressesProvider.getFeeProvider();
  await insertContractAddressInDb(
    eContractid.FeeProvider,
    feeProviderImplProxy
  );

  //param

  const parametersProvider = await deployLendingPoolParameter();

  await waitForTx(
    await addressesProvider.setLendingPoolParametersProvider(
      parametersProvider.address
    )
  );

  const parametersProviderProxy = await getLendingPoolParameterProxy(
    await addressesProvider.getLendingPoolParametersProvider()
  );
  await insertContractAddressInDb(
    eContractid.LendingPoolConfigurator,
    parametersProviderProxy.address
  );

  //config
  const lendingPoolConfiguratorImpl = await deployLendingPoolConfigurator();
  await waitForTx(
    await addressesProvider.setLendingPoolConfiguratorImpl(
      lendingPoolConfiguratorImpl.address
    )
  );
  //console.log("normal:  ", lendingPoolConfiguratorImpl.address);
  const lendingPoolConfiguratorProxy = await getLendingPoolConfiguratorProxy(
    await addressesProvider.getLendingPoolConfigurator()
  );
  await insertContractAddressInDb(
    eContractid.LendingPoolConfigurator,
    lendingPoolConfiguratorProxy.address
  );
  //console.log("proxy:  ", lendingPoolConfiguratorProxy.address);
  //

  //core
  const lib = await deployAaveLibraries();

  const lendingCoreImpl = await deployLendingPoolCore(lib);

  await waitForTx(
    await addressesProvider.setLendingPoolCoreImpl(lendingCoreImpl.address)
  );

  const lendingCoreAddress = await addressesProvider.getLendingPoolCore();
  const lendingCoreProxy = await getLendingPool(lendingCoreAddress);

  await insertContractAddressInDb(
    eContractid.LendingPoolCore,
    lendingCoreProxy.address
  );

  //Data Provider
  const dataProvider = await deployAaveProtocolDataProvider(
    addressesProvider.address
  );

  await waitForTx(
    await addressesProvider.setLendingPoolDataProviderImpl(dataProvider.address)
  );

  const dataProviderProxy = await addressesProvider.getLendingPoolDataProvider();

  await insertContractAddressInDb(
    eContractid.AaveProtocolDataProvider,
    dataProviderProxy
  );

  //liquidation

  const liq = await deployLendingPoolCollateralManager();
  await waitForTx(
    await addressesProvider.setLendingPoolLiquidationManager(liq.address)
  );

  //LP

  const lendingPoolImpl = await deployLendingPool();

  await waitForTx(
    await addressesProvider.setLendingPoolImpl(lendingPoolImpl.address)
  );

  const lendingPoolAddress = await addressesProvider.getLendingPool();
  const lendingPoolProxy = await getLendingPool(lendingPoolAddress);

  await insertContractAddressInDb(
    eContractid.LendingPool,
    lendingPoolProxy.address
  );

  // Deploy deployment helpers
  // await deployStableAndVariableTokensHelper([lendingPoolProxy.address, addressesProvider.address]);
  // await deployATokensAndRatesHelper([
  //   lendingPoolProxy.address,
  //   addressesProvider.address,
  //   lendingPoolConfiguratorProxy.address,
  // ]);

  const fallbackOracle = await deployPriceOracle();
  await waitForTx(await fallbackOracle.setEthUsdPrice(MOCK_USD_PRICE_IN_WEI));
  await setInitialAssetPricesInOracle(
    ALL_ASSETS_INITIAL_PRICES,
    {
      WETH: mockTokens.WETH.address,
      DAI: mockTokens.DAI.address,
      TUSD: mockTokens.TUSD.address,
      USDC: mockTokens.USDC.address,
      USDT: mockTokens.USDT.address,
      SUSD: mockTokens.SUSD.address,
      AAVE: mockTokens.AAVE.address,
      BAT: mockTokens.BAT.address,
      MKR: mockTokens.MKR.address,
      LINK: mockTokens.LINK.address,
      KNC: mockTokens.KNC.address,
      WBTC: mockTokens.WBTC.address,
      MANA: mockTokens.MANA.address,
      ZRX: mockTokens.ZRX.address,
      SNX: mockTokens.SNX.address,
      BUSD: mockTokens.BUSD.address,
      YFI: mockTokens.BUSD.address,
      REN: mockTokens.REN.address,
      UNI: mockTokens.UNI.address,
      ENJ: mockTokens.ENJ.address,
      USD: USD_ADDRESS,
    },
    fallbackOracle
  );

  //const mockAggregators = await deployAllMockAggregators(MOCK_CHAINLINK_AGGREGATORS_PRICES);

  const allTokenAddresses = Object.entries(mockTokens).reduce(
    (
      accum: { [tokenSymbol: string]: tEthereumAddress },
      [tokenSymbol, tokenContract]
    ) => ({
      ...accum,
      [tokenSymbol]: tokenContract.address,
    }),
    {}
  );
  // const allAggregatorsAddresses = Object.entries(mockAggregators).reduce(
  //   (accum: { [tokenSymbol: string]: tEthereumAddress }, [tokenSymbol, aggregator]) => ({
  //     ...accum,
  //     [tokenSymbol]: aggregator.address,
  //   }),
  //   {}
  // );

  // const [tokens, aggregators] = getPairsTokenAggregator(allTokenAddresses, allAggregatorsAddresses);

  // await deployAaveOracle([tokens, aggregators, fallbackOracle.address, mockTokens.WETH.address]);

  await waitForTx(
    await addressesProvider.setPriceOracle(fallbackOracle.address)
  );

  const lendingRateOracle = await deployLendingRateOracle();
  await waitForTx(
    await addressesProvider.setLendingRateOracle(lendingRateOracle.address)
  );

  const { USD, ...tokensAddressesWithoutUsd } = allTokenAddresses;
  const allReservesAddresses = {
    ...tokensAddressesWithoutUsd,
  };
  // await setInitialMarketRatesInRatesOracleByHelper(
  //   LENDING_RATE_ORACLE_RATES_COMMON,
  //   allReservesAddresses,
  //   lendingRateOracle,
  //   aaveAdmin
  // );

  const reservesParams = getReservesConfigByPool(AavePools.proto);

  const admin = await deployer.getAddress();

  console.log("Initialize configuration");

  const config = loadPoolConfig(ConfigNames.Aave);

  const treasuryAddress = await getTreasuryAddress(config);

  await initReservesByHelper(
    reservesParams,
    allReservesAddresses,
    admin,
    treasuryAddress,
    ZERO_ADDRESS,
    false
  );
  // await configureReservesByHelper(
  //   reservesParams,
  //   allReservesAddresses,
  //   testHelpers,
  //   admin
  // );

  // const collateralManager = await deployLendingPoolCollateralManager();
  // await waitForTx(
  //   await addressesProvider.setLendingPoolCollateralManager(collateralManager.address)
  // );

  const mockFlashLoanReceiver = await deployMockFlashLoanReceiver(
    addressesProvider.address
  );
  await insertContractAddressInDb(
    eContractid.MockFlashLoanReceiver,
    mockFlashLoanReceiver.address
  );

  // await deployWalletBalancerProvider();

  // await deployWETHGateway([mockTokens.WETH.address, lendingPoolAddress]);

  console.timeEnd("setup");
};

before(async () => {
  await rawBRE.run("set-DRE");
  const [deployer, secondaryWallet] = await getEthersSigners();
  const MAINNET_FORK = process.env.MAINNET_FORK === "true";

  if (MAINNET_FORK) {
    await rawBRE.run("aave:mainnet");
  } else {
    console.log("-> Deploying test environment...");
    await buildTestEnv(deployer, secondaryWallet);
  }

  console.log("initializeMakeSuite");
  await initializeMakeSuite();
  console.log("\n***************");
  console.log("Setup and snapshot finished");
  console.log("***************\n");
});
