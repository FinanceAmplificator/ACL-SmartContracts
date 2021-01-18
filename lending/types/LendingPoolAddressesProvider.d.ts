/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface LendingPoolAddressesProviderInterface extends ethers.utils.Interface {
  functions: {
    "getAddress(bytes32)": FunctionFragment;
    "isOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "getLendingPool()": FunctionFragment;
    "setLendingPoolImpl(address)": FunctionFragment;
    "getLendingPoolCore()": FunctionFragment;
    "setLendingPoolCoreImpl(address)": FunctionFragment;
    "getLendingPoolConfigurator()": FunctionFragment;
    "setLendingPoolConfiguratorImpl(address)": FunctionFragment;
    "getLendingPoolDataProvider()": FunctionFragment;
    "setLendingPoolDataProviderImpl(address)": FunctionFragment;
    "getLendingPoolParametersProvider()": FunctionFragment;
    "setLendingPoolParametersProvider(address)": FunctionFragment;
    "getFeeProvider()": FunctionFragment;
    "setFeeProviderImpl(address)": FunctionFragment;
    "getLendingPoolLiquidationManager()": FunctionFragment;
    "setLendingPoolLiquidationManager(address)": FunctionFragment;
    "getLendingPoolManager()": FunctionFragment;
    "setLendingPoolManager(address)": FunctionFragment;
    "getPriceOracle()": FunctionFragment;
    "setPriceOracle(address)": FunctionFragment;
    "getLendingRateOracle()": FunctionFragment;
    "setLendingRateOracle(address)": FunctionFragment;
    "getRewardManager()": FunctionFragment;
    "setRewardManager(address)": FunctionFragment;
    "getLpRewardVault()": FunctionFragment;
    "setLpRewardVault(address)": FunctionFragment;
    "getGovRewardVault()": FunctionFragment;
    "setGovRewardVault(address)": FunctionFragment;
    "getSafetyRewardVault()": FunctionFragment;
    "setSafetyRewardVault(address)": FunctionFragment;
    "getStakingToken()": FunctionFragment;
    "setStakingToken(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values?: void): string;
  encodeFunctionData(functionFragment: "owner", values?: void): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getLendingPool", values?: void): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolCore",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolCoreImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolConfigurator",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolConfiguratorImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolDataProvider",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolDataProviderImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolParametersProvider",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolParametersProvider",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getFeeProvider", values?: void): string;
  encodeFunctionData(
    functionFragment: "setFeeProviderImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolLiquidationManager",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolLiquidationManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolManager",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolManager",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getPriceOracle", values?: void): string;
  encodeFunctionData(
    functionFragment: "setPriceOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingRateOracle",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingRateOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardManager",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLpRewardVault",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setLpRewardVault",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getGovRewardVault",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setGovRewardVault",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSafetyRewardVault",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setSafetyRewardVault",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingToken",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "setStakingToken",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolCoreImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolConfigurator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolConfiguratorImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolDataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolDataProviderImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolParametersProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolParametersProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProviderImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolLiquidationManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolLiquidationManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingRateOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingRateOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLpRewardVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLpRewardVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGovRewardVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovRewardVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSafetyRewardVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSafetyRewardVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakingToken",
    data: BytesLike
  ): Result;

  events: {
    "FeeProviderUpdated(address)": EventFragment;
    "GovRewardVaultUpdated(address)": EventFragment;
    "LendingPoolConfiguratorUpdated(address)": EventFragment;
    "LendingPoolCoreUpdated(address)": EventFragment;
    "LendingPoolDataProviderUpdated(address)": EventFragment;
    "LendingPoolLiquidationManagerUpdated(address)": EventFragment;
    "LendingPoolManagerUpdated(address)": EventFragment;
    "LendingPoolParametersProviderUpdated(address)": EventFragment;
    "LendingPoolUpdated(address)": EventFragment;
    "LendingRateOracleUpdated(address)": EventFragment;
    "LiquidityRewardVaultUpdated(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PriceOracleUpdated(address)": EventFragment;
    "ProxyCreated(bytes32,address)": EventFragment;
    "RewardManagerUpdated(address)": EventFragment;
    "SafetyRewardVaultUpdated(address)": EventFragment;
    "StakingTokenUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeeProviderUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovRewardVaultUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LendingPoolConfiguratorUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingPoolCoreUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LendingPoolDataProviderUpdated"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LendingPoolLiquidationManagerUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingPoolManagerUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LendingPoolParametersProviderUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingPoolUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingRateOracleUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LiquidityRewardVaultUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceOracleUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProxyCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardManagerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SafetyRewardVaultUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakingTokenUpdated"): EventFragment;
}

export class LendingPoolAddressesProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LendingPoolAddressesProviderInterface;

  functions: {
    /**
     * function to return the addresses associated with a given key value
     * @param _key the key value to be examined*
     */
    getAddress(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Returns the address of the current owner.
     */
    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * returns the address of the LendingPool proxy
     * @returns the lending pool proxy address*
     */
    getLendingPool(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * updates the implementation of the lending pool
     * @param _pool the new lending pool implementation*
     */
    setLendingPoolImpl(
      _pool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * returns the address of the LendingPoolCore proxy
     * @returns the lending pool core proxy address
     */
    getLendingPoolCore(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * updates the implementation of the lending pool core
     * @param _lendingPoolCore the new lending pool core implementation*
     */
    setLendingPoolCoreImpl(
      _lendingPoolCore: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * returns the address of the LendingPoolConfigurator proxy
     * @returns the lending pool configurator proxy address*
     */
    getLendingPoolConfigurator(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * updates the implementation of the lending pool configurator
     * @param _configurator the new lending pool configurator implementation*
     */
    setLendingPoolConfiguratorImpl(
      _configurator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * returns the address of the LendingPoolDataProvider proxy
     * @returns the lending pool data provider proxy address
     */
    getLendingPoolDataProvider(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * updates the implementation of the lending pool data provider
     * @param _provider the new lending pool data provider implementation*
     */
    setLendingPoolDataProviderImpl(
      _provider: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * returns the address of the LendingPoolParametersProvider proxy
     * @returns the address of the Lending pool parameters provider proxy*
     */
    getLendingPoolParametersProvider(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * updates the implementation of the lending pool parameters provider
     * @param _parametersProvider the new lending pool parameters provider implementation*
     */
    setLendingPoolParametersProvider(
      _parametersProvider: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * returns the address of the FeeProvider proxy
     * @returns the address of the Fee provider proxy*
     */
    getFeeProvider(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * updates the implementation of the FeeProvider proxy
     * @param _feeProvider the new lending pool fee provider implementation*
     */
    setFeeProviderImpl(
      _feeProvider: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * returns the address of the LendingPoolLiquidationManager. Since the manager is used through delegateCall within the LendingPool contract, the proxy contract pattern does not work properly hence the addresses are changed directly.
     * @returns the address of the Lending pool liquidation manager*
     */
    getLendingPoolLiquidationManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * updates the address of the Lending pool liquidation manager
     * @param _manager the new lending pool liquidation manager address*
     */
    setLendingPoolLiquidationManager(
      _manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * the functions below are storing specific addresses that are outside the context of the protocol hence the upgradable proxy pattern is not used*
     */
    getLendingPoolManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setLendingPoolManager(
      _lendingPoolManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getPriceOracle(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setPriceOracle(
      _priceOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getLendingRateOracle(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setLendingRateOracle(
      _lendingRateOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getRewardManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setRewardManager(
      _manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getLpRewardVault(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setLpRewardVault(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getGovRewardVault(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setGovRewardVault(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getSafetyRewardVault(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setSafetyRewardVault(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getStakingToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setStakingToken(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * function to return the addresses associated with a given key value
   * @param _key the key value to be examined*
   */
  getAddress(_key: BytesLike, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns true if the caller is the current owner.
   */
  isOwner(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * returns the address of the LendingPool proxy
   * @returns the lending pool proxy address*
   */
  getLendingPool(overrides?: CallOverrides): Promise<string>;

  /**
   * updates the implementation of the lending pool
   * @param _pool the new lending pool implementation*
   */
  setLendingPoolImpl(
    _pool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * returns the address of the LendingPoolCore proxy
   * @returns the lending pool core proxy address
   */
  getLendingPoolCore(overrides?: CallOverrides): Promise<string>;

  /**
   * updates the implementation of the lending pool core
   * @param _lendingPoolCore the new lending pool core implementation*
   */
  setLendingPoolCoreImpl(
    _lendingPoolCore: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * returns the address of the LendingPoolConfigurator proxy
   * @returns the lending pool configurator proxy address*
   */
  getLendingPoolConfigurator(overrides?: CallOverrides): Promise<string>;

  /**
   * updates the implementation of the lending pool configurator
   * @param _configurator the new lending pool configurator implementation*
   */
  setLendingPoolConfiguratorImpl(
    _configurator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * returns the address of the LendingPoolDataProvider proxy
   * @returns the lending pool data provider proxy address
   */
  getLendingPoolDataProvider(overrides?: CallOverrides): Promise<string>;

  /**
   * updates the implementation of the lending pool data provider
   * @param _provider the new lending pool data provider implementation*
   */
  setLendingPoolDataProviderImpl(
    _provider: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * returns the address of the LendingPoolParametersProvider proxy
   * @returns the address of the Lending pool parameters provider proxy*
   */
  getLendingPoolParametersProvider(overrides?: CallOverrides): Promise<string>;

  /**
   * updates the implementation of the lending pool parameters provider
   * @param _parametersProvider the new lending pool parameters provider implementation*
   */
  setLendingPoolParametersProvider(
    _parametersProvider: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * returns the address of the FeeProvider proxy
   * @returns the address of the Fee provider proxy*
   */
  getFeeProvider(overrides?: CallOverrides): Promise<string>;

  /**
   * updates the implementation of the FeeProvider proxy
   * @param _feeProvider the new lending pool fee provider implementation*
   */
  setFeeProviderImpl(
    _feeProvider: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * returns the address of the LendingPoolLiquidationManager. Since the manager is used through delegateCall within the LendingPool contract, the proxy contract pattern does not work properly hence the addresses are changed directly.
   * @returns the address of the Lending pool liquidation manager*
   */
  getLendingPoolLiquidationManager(overrides?: CallOverrides): Promise<string>;

  /**
   * updates the address of the Lending pool liquidation manager
   * @param _manager the new lending pool liquidation manager address*
   */
  setLendingPoolLiquidationManager(
    _manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * the functions below are storing specific addresses that are outside the context of the protocol hence the upgradable proxy pattern is not used*
   */
  getLendingPoolManager(overrides?: CallOverrides): Promise<string>;

  setLendingPoolManager(
    _lendingPoolManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getPriceOracle(overrides?: CallOverrides): Promise<string>;

  setPriceOracle(
    _priceOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getLendingRateOracle(overrides?: CallOverrides): Promise<string>;

  setLendingRateOracle(
    _lendingRateOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getRewardManager(overrides?: CallOverrides): Promise<string>;

  setRewardManager(
    _manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getLpRewardVault(overrides?: CallOverrides): Promise<string>;

  setLpRewardVault(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getGovRewardVault(overrides?: CallOverrides): Promise<string>;

  setGovRewardVault(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getSafetyRewardVault(overrides?: CallOverrides): Promise<string>;

  setSafetyRewardVault(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getStakingToken(overrides?: CallOverrides): Promise<string>;

  setStakingToken(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    /**
     * function to return the addresses associated with a given key value
     * @param _key the key value to be examined*
     */
    getAddress(_key: BytesLike, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns true if the caller is the current owner.
     */
    isOwner(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.     * NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<void>;

    /**
     * returns the address of the LendingPool proxy
     * @returns the lending pool proxy address*
     */
    getLendingPool(overrides?: CallOverrides): Promise<string>;

    /**
     * updates the implementation of the lending pool
     * @param _pool the new lending pool implementation*
     */
    setLendingPoolImpl(_pool: string, overrides?: Overrides): Promise<void>;

    /**
     * returns the address of the LendingPoolCore proxy
     * @returns the lending pool core proxy address
     */
    getLendingPoolCore(overrides?: CallOverrides): Promise<string>;

    /**
     * updates the implementation of the lending pool core
     * @param _lendingPoolCore the new lending pool core implementation*
     */
    setLendingPoolCoreImpl(
      _lendingPoolCore: string,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * returns the address of the LendingPoolConfigurator proxy
     * @returns the lending pool configurator proxy address*
     */
    getLendingPoolConfigurator(overrides?: CallOverrides): Promise<string>;

    /**
     * updates the implementation of the lending pool configurator
     * @param _configurator the new lending pool configurator implementation*
     */
    setLendingPoolConfiguratorImpl(
      _configurator: string,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * returns the address of the LendingPoolDataProvider proxy
     * @returns the lending pool data provider proxy address
     */
    getLendingPoolDataProvider(overrides?: CallOverrides): Promise<string>;

    /**
     * updates the implementation of the lending pool data provider
     * @param _provider the new lending pool data provider implementation*
     */
    setLendingPoolDataProviderImpl(
      _provider: string,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * returns the address of the LendingPoolParametersProvider proxy
     * @returns the address of the Lending pool parameters provider proxy*
     */
    getLendingPoolParametersProvider(
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * updates the implementation of the lending pool parameters provider
     * @param _parametersProvider the new lending pool parameters provider implementation*
     */
    setLendingPoolParametersProvider(
      _parametersProvider: string,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * returns the address of the FeeProvider proxy
     * @returns the address of the Fee provider proxy*
     */
    getFeeProvider(overrides?: CallOverrides): Promise<string>;

    /**
     * updates the implementation of the FeeProvider proxy
     * @param _feeProvider the new lending pool fee provider implementation*
     */
    setFeeProviderImpl(
      _feeProvider: string,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * returns the address of the LendingPoolLiquidationManager. Since the manager is used through delegateCall within the LendingPool contract, the proxy contract pattern does not work properly hence the addresses are changed directly.
     * @returns the address of the Lending pool liquidation manager*
     */
    getLendingPoolLiquidationManager(
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * updates the address of the Lending pool liquidation manager
     * @param _manager the new lending pool liquidation manager address*
     */
    setLendingPoolLiquidationManager(
      _manager: string,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * the functions below are storing specific addresses that are outside the context of the protocol hence the upgradable proxy pattern is not used*
     */
    getLendingPoolManager(overrides?: CallOverrides): Promise<string>;

    setLendingPoolManager(
      _lendingPoolManager: string,
      overrides?: Overrides
    ): Promise<void>;

    getPriceOracle(overrides?: CallOverrides): Promise<string>;

    setPriceOracle(_priceOracle: string, overrides?: Overrides): Promise<void>;

    getLendingRateOracle(overrides?: CallOverrides): Promise<string>;

    setLendingRateOracle(
      _lendingRateOracle: string,
      overrides?: Overrides
    ): Promise<void>;

    getRewardManager(overrides?: CallOverrides): Promise<string>;

    setRewardManager(_manager: string, overrides?: Overrides): Promise<void>;

    getLpRewardVault(overrides?: CallOverrides): Promise<string>;

    setLpRewardVault(_address: string, overrides?: Overrides): Promise<void>;

    getGovRewardVault(overrides?: CallOverrides): Promise<string>;

    setGovRewardVault(_address: string, overrides?: Overrides): Promise<void>;

    getSafetyRewardVault(overrides?: CallOverrides): Promise<string>;

    setSafetyRewardVault(
      _address: string,
      overrides?: Overrides
    ): Promise<void>;

    getStakingToken(overrides?: CallOverrides): Promise<string>;

    setStakingToken(_address: string, overrides?: Overrides): Promise<void>;
  };

  filters: {
    FeeProviderUpdated(newAddress: string | null): EventFilter;

    GovRewardVaultUpdated(newAddress: string | null): EventFilter;

    LendingPoolConfiguratorUpdated(newAddress: string | null): EventFilter;

    LendingPoolCoreUpdated(newAddress: string | null): EventFilter;

    LendingPoolDataProviderUpdated(newAddress: string | null): EventFilter;

    LendingPoolLiquidationManagerUpdated(
      newAddress: string | null
    ): EventFilter;

    LendingPoolManagerUpdated(newAddress: string | null): EventFilter;

    LendingPoolParametersProviderUpdated(
      newAddress: string | null
    ): EventFilter;

    LendingPoolUpdated(newAddress: string | null): EventFilter;

    LendingRateOracleUpdated(newAddress: string | null): EventFilter;

    LiquidityRewardVaultUpdated(newAddress: string | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PriceOracleUpdated(newAddress: string | null): EventFilter;

    ProxyCreated(id: null, newAddress: string | null): EventFilter;

    RewardManagerUpdated(newAddress: string | null): EventFilter;

    SafetyRewardVaultUpdated(newAddress: string | null): EventFilter;

    StakingTokenUpdated(newAddress: string | null): EventFilter;
  };

  estimateGas: {
    getAddress(_key: BytesLike): Promise<BigNumber>;
    isOwner(): Promise<BigNumber>;
    owner(): Promise<BigNumber>;
    renounceOwnership(): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<BigNumber>;
    getLendingPool(): Promise<BigNumber>;
    setLendingPoolImpl(_pool: string): Promise<BigNumber>;
    getLendingPoolCore(): Promise<BigNumber>;
    setLendingPoolCoreImpl(_lendingPoolCore: string): Promise<BigNumber>;
    getLendingPoolConfigurator(): Promise<BigNumber>;
    setLendingPoolConfiguratorImpl(_configurator: string): Promise<BigNumber>;
    getLendingPoolDataProvider(): Promise<BigNumber>;
    setLendingPoolDataProviderImpl(_provider: string): Promise<BigNumber>;
    getLendingPoolParametersProvider(): Promise<BigNumber>;
    setLendingPoolParametersProvider(
      _parametersProvider: string
    ): Promise<BigNumber>;
    getFeeProvider(): Promise<BigNumber>;
    setFeeProviderImpl(_feeProvider: string): Promise<BigNumber>;
    getLendingPoolLiquidationManager(): Promise<BigNumber>;
    setLendingPoolLiquidationManager(_manager: string): Promise<BigNumber>;
    getLendingPoolManager(): Promise<BigNumber>;
    setLendingPoolManager(_lendingPoolManager: string): Promise<BigNumber>;
    getPriceOracle(): Promise<BigNumber>;
    setPriceOracle(_priceOracle: string): Promise<BigNumber>;
    getLendingRateOracle(): Promise<BigNumber>;
    setLendingRateOracle(_lendingRateOracle: string): Promise<BigNumber>;
    getRewardManager(): Promise<BigNumber>;
    setRewardManager(_manager: string): Promise<BigNumber>;
    getLpRewardVault(): Promise<BigNumber>;
    setLpRewardVault(_address: string): Promise<BigNumber>;
    getGovRewardVault(): Promise<BigNumber>;
    setGovRewardVault(_address: string): Promise<BigNumber>;
    getSafetyRewardVault(): Promise<BigNumber>;
    setSafetyRewardVault(_address: string): Promise<BigNumber>;
    getStakingToken(): Promise<BigNumber>;
    setStakingToken(_address: string): Promise<BigNumber>;
  };

  populateTransaction: {
    getAddress(_key: BytesLike): Promise<PopulatedTransaction>;
    isOwner(): Promise<PopulatedTransaction>;
    owner(): Promise<PopulatedTransaction>;
    renounceOwnership(): Promise<PopulatedTransaction>;
    transferOwnership(newOwner: string): Promise<PopulatedTransaction>;
    getLendingPool(): Promise<PopulatedTransaction>;
    setLendingPoolImpl(_pool: string): Promise<PopulatedTransaction>;
    getLendingPoolCore(): Promise<PopulatedTransaction>;
    setLendingPoolCoreImpl(
      _lendingPoolCore: string
    ): Promise<PopulatedTransaction>;
    getLendingPoolConfigurator(): Promise<PopulatedTransaction>;
    setLendingPoolConfiguratorImpl(
      _configurator: string
    ): Promise<PopulatedTransaction>;
    getLendingPoolDataProvider(): Promise<PopulatedTransaction>;
    setLendingPoolDataProviderImpl(
      _provider: string
    ): Promise<PopulatedTransaction>;
    getLendingPoolParametersProvider(): Promise<PopulatedTransaction>;
    setLendingPoolParametersProvider(
      _parametersProvider: string
    ): Promise<PopulatedTransaction>;
    getFeeProvider(): Promise<PopulatedTransaction>;
    setFeeProviderImpl(_feeProvider: string): Promise<PopulatedTransaction>;
    getLendingPoolLiquidationManager(): Promise<PopulatedTransaction>;
    setLendingPoolLiquidationManager(
      _manager: string
    ): Promise<PopulatedTransaction>;
    getLendingPoolManager(): Promise<PopulatedTransaction>;
    setLendingPoolManager(
      _lendingPoolManager: string
    ): Promise<PopulatedTransaction>;
    getPriceOracle(): Promise<PopulatedTransaction>;
    setPriceOracle(_priceOracle: string): Promise<PopulatedTransaction>;
    getLendingRateOracle(): Promise<PopulatedTransaction>;
    setLendingRateOracle(
      _lendingRateOracle: string
    ): Promise<PopulatedTransaction>;
    getRewardManager(): Promise<PopulatedTransaction>;
    setRewardManager(_manager: string): Promise<PopulatedTransaction>;
    getLpRewardVault(): Promise<PopulatedTransaction>;
    setLpRewardVault(_address: string): Promise<PopulatedTransaction>;
    getGovRewardVault(): Promise<PopulatedTransaction>;
    setGovRewardVault(_address: string): Promise<PopulatedTransaction>;
    getSafetyRewardVault(): Promise<PopulatedTransaction>;
    setSafetyRewardVault(_address: string): Promise<PopulatedTransaction>;
    getStakingToken(): Promise<PopulatedTransaction>;
    setStakingToken(_address: string): Promise<PopulatedTransaction>;
  };
}
