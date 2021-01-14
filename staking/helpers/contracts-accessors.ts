import { BMxxIncentivesController } from './../types/BMxxIncentivesController.d';
import {deployContract, getContractFactory, getContract} from './contracts-helpers';
import {eContractid, tEthereumAddress} from './types';
import {MintableErc20} from '../types/MintableErc20';
import {StakedbMxx} from '../types/StakedbMXX';
import {Ierc20Detailed} from '../types/Ierc20Detailed';
import {InitializableAdminUpgradeabilityProxy} from '../types/InitializableAdminUpgradeabilityProxy';
import {LendingPoolMock} from '../types/LendingPoolMock';
import {MockTransferHook} from '../types/MockTransferHook';
import {verifyContract} from './etherscan-verification';
import {BTokenMock} from '../types/BTokenMock';
import {getDb, BRE} from './misc-utils';

export const deployStakedbMXX = async (
  [
    stakedToken,
    rewardsToken,
    cooldownDays,
    unstakeWindow,
    rewardsVault,
    emissionManager,
    distributionDuration,
  ]: [
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    tEthereumAddress,
    tEthereumAddress,
    string
  ],
  verify?: boolean
) => {
  const id = eContractid.StakedbMXX;
  const args: string[] = [
    stakedToken,
    rewardsToken,
    cooldownDays,
    unstakeWindow,
    rewardsVault,
    emissionManager,
    distributionDuration,
  ];
  const instance = await deployContract<StakedbMxx>(id, args);
  if (verify) {
    await verifyContract(id, instance.address, args);
  }
  return instance;
};

export const deploybMXXIncentivesController = async (
  [rewardToken, rewardsVault, bMXXPsm, extraPsmReward, emissionManager, distributionDuration]: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    tEthereumAddress,
    string
  ],
  verify?: boolean
) => {
  const id = eContractid.bMXXIncentivesController;
  const args: string[] = [
    rewardToken,
    rewardsVault,
    bMXXPsm,
    extraPsmReward,
    emissionManager,
    distributionDuration,
  ];
  const instance = await deployContract<BMxxIncentivesController>(id, args);
  await instance.deployTransaction.wait();
  if (verify) {
    await verifyContract(id, instance.address, args);
  }
  return instance;
};

export const deployMintableErc20 = async ([name, symbol, decimals]: [string, string, number]) =>
  await deployContract<MintableErc20>(eContractid.MintableErc20, [name, symbol, decimals]);

export const deployInitializableAdminUpgradeabilityProxy = async (verify?: boolean) => {
  const id = eContractid.InitializableAdminUpgradeabilityProxy;
  const args: string[] = [];
  const instance = await deployContract<InitializableAdminUpgradeabilityProxy>(id, args);
  await instance.deployTransaction.wait();
  if (verify) {
    await verifyContract(id, instance.address, args);
  }
  return instance;
};

export const deployMockTransferHook = async () =>
  await deployContract<MockTransferHook>(eContractid.MockTransferHook, []);

export const deployBTokenMock = async (bicAddress: tEthereumAddress, slug: string) =>
  await deployContract<BTokenMock>(eContractid.BTokenMock, [bicAddress], slug);

export const getMintableErc20 = getContractFactory<MintableErc20>(eContractid.MintableErc20);
export const getLendingPoolMock = getContractFactory<LendingPoolMock>(eContractid.LendingPoolMock);

export const getStakedbMXX = getContractFactory<StakedbMxx>(eContractid.StakedbMXX);

export const getStakedbMXXProxy = async (address?: tEthereumAddress) => {
  return await getContract<InitializableAdminUpgradeabilityProxy>(
    eContractid.InitializableAdminUpgradeabilityProxy,
    address || (await getDb().get(`${eContractid.StakedbMXX}.${BRE.network.name}`).value()).address
  );
};

export const getStakedbMXXImpl = async (address?: tEthereumAddress) => {
  return await getContract<StakedbMxx>(
    eContractid.StakedbMXX,
    address ||
      (await getDb().get(`${eContractid.StakedbMXXImpl}.${BRE.network.name}`).value()).address
  );
};

export const getbMXXIncentivesController = getContractFactory<BMxxIncentivesController>(
  eContractid.bMXXIncentivesController
);

export const getIErc20Detailed = getContractFactory<Ierc20Detailed>(eContractid.IERC20Detailed);

export const getBTokenMock = getContractFactory<BTokenMock>(eContractid.BTokenMock);
