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

interface MTokenInterface extends ethers.utils.Interface {
  functions: {
    "UINT_MAX_VALUE()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "symbol()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "underlyingAssetAddress()": FunctionFragment;
    "redirectInterestStream(address)": FunctionFragment;
    "redirectInterestStreamOf(address,address)": FunctionFragment;
    "allowInterestRedirectionTo(address)": FunctionFragment;
    "redeem(uint256)": FunctionFragment;
    "mintOnDeposit(address,uint256)": FunctionFragment;
    "burnOnLiquidation(address,uint256)": FunctionFragment;
    "transferOnLiquidation(address,address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "principalBalanceOf(address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "isTransferAllowed(address,uint256)": FunctionFragment;
    "getUserIndex(address)": FunctionFragment;
    "getInterestRedirectionAddress(address)": FunctionFragment;
    "getRedirectedBalance(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "UINT_MAX_VALUE", values?: void): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: void): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: void): string;
  encodeFunctionData(functionFragment: "symbol", values?: void): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingAssetAddress",
    values?: void
  ): string;
  encodeFunctionData(
    functionFragment: "redirectInterestStream",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "redirectInterestStreamOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowInterestRedirectionTo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintOnDeposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnOnLiquidation",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOnLiquidation",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "principalBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "totalSupply", values?: void): string;
  encodeFunctionData(
    functionFragment: "isTransferAllowed",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getInterestRedirectionAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRedirectedBalance",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "UINT_MAX_VALUE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingAssetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redirectInterestStream",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redirectInterestStreamOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowInterestRedirectionTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintOnDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnOnLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOnLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "principalBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTransferAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInterestRedirectionAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedirectedBalance",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "BalanceTransfer(address,address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "BurnOnLiquidation(address,uint256,uint256,uint256)": EventFragment;
    "InterestRedirectionAllowanceChanged(address,address)": EventFragment;
    "InterestStreamRedirected(address,address,uint256,uint256,uint256)": EventFragment;
    "MintOnDeposit(address,uint256,uint256,uint256)": EventFragment;
    "Redeem(address,uint256,uint256,uint256)": EventFragment;
    "RedirectedBalanceUpdated(address,uint256,uint256,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BalanceTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BurnOnLiquidation"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "InterestRedirectionAllowanceChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InterestStreamRedirected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintOnDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RedirectedBalanceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class MToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MTokenInterface;

  functions: {
    UINT_MAX_VALUE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC20-allowance}.
     */
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address.
     */
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    decimals(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.
     */
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Returns the name of the token.
     */
    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20};     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for `sender`'s tokens of at least `amount`.
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    underlyingAssetAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * redirects the interest generated to a target address. when the interest is redirected, the user balance is added to the recepient redirected balance.
     * @param _to the address to which the interest will be redirected*
     */
    redirectInterestStream(
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * redirects the interest generated by _from to a target address. when the interest is redirected, the user balance is added to the recepient redirected balance. The caller needs to have allowance on the interest redirection to be able to execute the function.
     * @param _from the address of the user whom interest is being redirected
     * @param _to the address to which the interest will be redirected*
     */
    redirectInterestStreamOf(
      _from: string,
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * gives allowance to an address to execute the interest redirection on behalf of the caller.
     * @param _to the address to which the interest will be redirected. Pass address(0) to reset the allowance.*
     */
    allowInterestRedirectionTo(
      _to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * redeems mToken for the underlying asset
     * @param _amount the amount being redeemed*
     */
    redeem(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * mints token in the event of users depositing the underlying asset into the lending pool only lending pools can call this function
     * @param _account the address receiving the minted tokens
     * @param _amount the amount of tokens to mint
     */
    mintOnDeposit(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * burns token in the event of a borrow being liquidated, in case the liquidators reclaims the underlying asset Transfer of the liquidated asset is executed by the lending pool contract. only lending pools can call this function
     * @param _account the address from which burn the mTokens
     * @param _value the amount to burn*
     */
    burnOnLiquidation(
      _account: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * transfers tokens in the event of a borrow being liquidated, in case the liquidators reclaims the mToken     only lending pools can call this function
     * @param _from the address from which transfer the mTokens
     * @param _to the destination address
     * @param _value the amount to transfer*
     */
    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * calculates the balance of the user, which is the principal balance + interest generated by the principal balance + interest generated by the redirected balance
     * @param _user the user for which the balance is being calculated
     * @returns the total balance of the user*
     */
    balanceOf(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * returns the principal balance of the user. The principal balance is the last updated stored balance, which does not consider the perpetually accruing interest.
     * @param _user the address of the user
     * @returns the principal balance of the user*
     */
    principalBalanceOf(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * calculates the total supply of the specific mToken since the balance of every single user increases over time, the total supply does that too.
     * @returns the current total supply*
     */
    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Used to validate transfers before actually executing them.
     * @param _amount the amount to check
     * @param _user address of the user to check
     * @returns true if the _user can transfer _amount, false otherwise*
     */
    isTransferAllowed(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * returns the last index of the user, used to calculate the balance of the user
     * @param _user address of the user
     * @returns the last user index*
     */
    getUserIndex(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * returns the address to which the interest is redirected
     * @param _user address of the user
     * @returns 0 if there is no redirection, an address otherwise*
     */
    getInterestRedirectionAddress(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * returns the redirected balance of the user. The redirected balance is the balance redirected by other accounts to the user, that is accrueing interest for him.
     * @param _user address of the user
     * @returns the total redirected balance*
     */
    getRedirectedBalance(
      _user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  UINT_MAX_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * See {IERC20-allowance}.
   */
  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address.
   */
  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
   */
  decimals(overrides?: CallOverrides): Promise<number>;

  /**
   * Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
   */
  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.
   */
  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Returns the name of the token.
   */
  name(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the symbol of the token, usually a shorter version of the name.
   */
  symbol(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
   */
  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20};     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for `sender`'s tokens of at least `amount`.
   */
  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  underlyingAssetAddress(overrides?: CallOverrides): Promise<string>;

  /**
   * redirects the interest generated to a target address. when the interest is redirected, the user balance is added to the recepient redirected balance.
   * @param _to the address to which the interest will be redirected*
   */
  redirectInterestStream(
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * redirects the interest generated by _from to a target address. when the interest is redirected, the user balance is added to the recepient redirected balance. The caller needs to have allowance on the interest redirection to be able to execute the function.
   * @param _from the address of the user whom interest is being redirected
   * @param _to the address to which the interest will be redirected*
   */
  redirectInterestStreamOf(
    _from: string,
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * gives allowance to an address to execute the interest redirection on behalf of the caller.
   * @param _to the address to which the interest will be redirected. Pass address(0) to reset the allowance.*
   */
  allowInterestRedirectionTo(
    _to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * redeems mToken for the underlying asset
   * @param _amount the amount being redeemed*
   */
  redeem(
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * mints token in the event of users depositing the underlying asset into the lending pool only lending pools can call this function
   * @param _account the address receiving the minted tokens
   * @param _amount the amount of tokens to mint
   */
  mintOnDeposit(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * burns token in the event of a borrow being liquidated, in case the liquidators reclaims the underlying asset Transfer of the liquidated asset is executed by the lending pool contract. only lending pools can call this function
   * @param _account the address from which burn the mTokens
   * @param _value the amount to burn*
   */
  burnOnLiquidation(
    _account: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * transfers tokens in the event of a borrow being liquidated, in case the liquidators reclaims the mToken     only lending pools can call this function
   * @param _from the address from which transfer the mTokens
   * @param _to the destination address
   * @param _value the amount to transfer*
   */
  transferOnLiquidation(
    _from: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * calculates the balance of the user, which is the principal balance + interest generated by the principal balance + interest generated by the redirected balance
   * @param _user the user for which the balance is being calculated
   * @returns the total balance of the user*
   */
  balanceOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * returns the principal balance of the user. The principal balance is the last updated stored balance, which does not consider the perpetually accruing interest.
   * @param _user the address of the user
   * @returns the principal balance of the user*
   */
  principalBalanceOf(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * calculates the total supply of the specific mToken since the balance of every single user increases over time, the total supply does that too.
   * @returns the current total supply*
   */
  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Used to validate transfers before actually executing them.
   * @param _amount the amount to check
   * @param _user address of the user to check
   * @returns true if the _user can transfer _amount, false otherwise*
   */
  isTransferAllowed(
    _user: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * returns the last index of the user, used to calculate the balance of the user
   * @param _user address of the user
   * @returns the last user index*
   */
  getUserIndex(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * returns the address to which the interest is redirected
   * @param _user address of the user
   * @returns 0 if there is no redirection, an address otherwise*
   */
  getInterestRedirectionAddress(
    _user: string,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * returns the redirected balance of the user. The redirected balance is the balance redirected by other accounts to the user, that is accrueing interest for him.
   * @param _user address of the user
   * @returns the total redirected balance*
   */
  getRedirectedBalance(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  staticCall: {
    UINT_MAX_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC20-allowance}.
     */
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address.
     */
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    decimals(overrides?: CallOverrides): Promise<number>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.
     */
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     * Returns the name of the token.
     */
    name(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    symbol(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     * See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20};     * Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for `sender`'s tokens of at least `amount`.
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    underlyingAssetAddress(overrides?: CallOverrides): Promise<string>;

    /**
     * redirects the interest generated to a target address. when the interest is redirected, the user balance is added to the recepient redirected balance.
     * @param _to the address to which the interest will be redirected*
     */
    redirectInterestStream(_to: string, overrides?: Overrides): Promise<void>;

    /**
     * redirects the interest generated by _from to a target address. when the interest is redirected, the user balance is added to the recepient redirected balance. The caller needs to have allowance on the interest redirection to be able to execute the function.
     * @param _from the address of the user whom interest is being redirected
     * @param _to the address to which the interest will be redirected*
     */
    redirectInterestStreamOf(
      _from: string,
      _to: string,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * gives allowance to an address to execute the interest redirection on behalf of the caller.
     * @param _to the address to which the interest will be redirected. Pass address(0) to reset the allowance.*
     */
    allowInterestRedirectionTo(
      _to: string,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * redeems mToken for the underlying asset
     * @param _amount the amount being redeemed*
     */
    redeem(_amount: BigNumberish, overrides?: Overrides): Promise<void>;

    /**
     * mints token in the event of users depositing the underlying asset into the lending pool only lending pools can call this function
     * @param _account the address receiving the minted tokens
     * @param _amount the amount of tokens to mint
     */
    mintOnDeposit(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * burns token in the event of a borrow being liquidated, in case the liquidators reclaims the underlying asset Transfer of the liquidated asset is executed by the lending pool contract. only lending pools can call this function
     * @param _account the address from which burn the mTokens
     * @param _value the amount to burn*
     */
    burnOnLiquidation(
      _account: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * transfers tokens in the event of a borrow being liquidated, in case the liquidators reclaims the mToken     only lending pools can call this function
     * @param _from the address from which transfer the mTokens
     * @param _to the destination address
     * @param _value the amount to transfer*
     */
    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    /**
     * calculates the balance of the user, which is the principal balance + interest generated by the principal balance + interest generated by the redirected balance
     * @param _user the user for which the balance is being calculated
     * @returns the total balance of the user*
     */
    balanceOf(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * returns the principal balance of the user. The principal balance is the last updated stored balance, which does not consider the perpetually accruing interest.
     * @param _user the address of the user
     * @returns the principal balance of the user*
     */
    principalBalanceOf(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * calculates the total supply of the specific mToken since the balance of every single user increases over time, the total supply does that too.
     * @returns the current total supply*
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Used to validate transfers before actually executing them.
     * @param _amount the amount to check
     * @param _user address of the user to check
     * @returns true if the _user can transfer _amount, false otherwise*
     */
    isTransferAllowed(
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * returns the last index of the user, used to calculate the balance of the user
     * @param _user address of the user
     * @returns the last user index*
     */
    getUserIndex(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * returns the address to which the interest is redirected
     * @param _user address of the user
     * @returns 0 if there is no redirection, an address otherwise*
     */
    getInterestRedirectionAddress(
      _user: string,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * returns the redirected balance of the user. The redirected balance is the balance redirected by other accounts to the user, that is accrueing interest for him.
     * @param _user address of the user
     * @returns the total redirected balance*
     */
    getRedirectedBalance(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    BalanceTransfer(
      _from: string | null,
      _to: string | null,
      _value: null,
      _fromBalanceIncrease: null,
      _toBalanceIncrease: null,
      _fromIndex: null,
      _toIndex: null
    ): EventFilter;

    BurnOnLiquidation(
      _from: string | null,
      _value: null,
      _fromBalanceIncrease: null,
      _fromIndex: null
    ): EventFilter;

    InterestRedirectionAllowanceChanged(
      _from: string | null,
      _to: string | null
    ): EventFilter;

    InterestStreamRedirected(
      _from: string | null,
      _to: string | null,
      _redirectedBalance: null,
      _fromBalanceIncrease: null,
      _fromIndex: null
    ): EventFilter;

    MintOnDeposit(
      _from: string | null,
      _value: null,
      _fromBalanceIncrease: null,
      _fromIndex: null
    ): EventFilter;

    Redeem(
      _from: string | null,
      _value: null,
      _fromBalanceIncrease: null,
      _fromIndex: null
    ): EventFilter;

    RedirectedBalanceUpdated(
      _targetAddress: string | null,
      _targetBalanceIncrease: null,
      _targetIndex: null,
      _redirectedBalanceAdded: null,
      _redirectedBalanceRemoved: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    UINT_MAX_VALUE(): Promise<BigNumber>;
    allowance(owner: string, spender: string): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish
    ): Promise<BigNumber>;
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish
    ): Promise<BigNumber>;
    name(): Promise<BigNumber>;
    symbol(): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
    underlyingAssetAddress(): Promise<BigNumber>;
    redirectInterestStream(_to: string): Promise<BigNumber>;
    redirectInterestStreamOf(_from: string, _to: string): Promise<BigNumber>;
    allowInterestRedirectionTo(_to: string): Promise<BigNumber>;
    redeem(_amount: BigNumberish): Promise<BigNumber>;
    mintOnDeposit(_account: string, _amount: BigNumberish): Promise<BigNumber>;
    burnOnLiquidation(
      _account: string,
      _value: BigNumberish
    ): Promise<BigNumber>;
    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: BigNumberish
    ): Promise<BigNumber>;
    balanceOf(_user: string): Promise<BigNumber>;
    principalBalanceOf(_user: string): Promise<BigNumber>;
    totalSupply(): Promise<BigNumber>;
    isTransferAllowed(_user: string, _amount: BigNumberish): Promise<BigNumber>;
    getUserIndex(_user: string): Promise<BigNumber>;
    getInterestRedirectionAddress(_user: string): Promise<BigNumber>;
    getRedirectedBalance(_user: string): Promise<BigNumber>;
  };

  populateTransaction: {
    UINT_MAX_VALUE(): Promise<PopulatedTransaction>;
    allowance(owner: string, spender: string): Promise<PopulatedTransaction>;
    approve(
      spender: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    decimals(): Promise<PopulatedTransaction>;
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish
    ): Promise<PopulatedTransaction>;
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish
    ): Promise<PopulatedTransaction>;
    name(): Promise<PopulatedTransaction>;
    symbol(): Promise<PopulatedTransaction>;
    transfer(
      recipient: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    underlyingAssetAddress(): Promise<PopulatedTransaction>;
    redirectInterestStream(_to: string): Promise<PopulatedTransaction>;
    redirectInterestStreamOf(
      _from: string,
      _to: string
    ): Promise<PopulatedTransaction>;
    allowInterestRedirectionTo(_to: string): Promise<PopulatedTransaction>;
    redeem(_amount: BigNumberish): Promise<PopulatedTransaction>;
    mintOnDeposit(
      _account: string,
      _amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    burnOnLiquidation(
      _account: string,
      _value: BigNumberish
    ): Promise<PopulatedTransaction>;
    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: BigNumberish
    ): Promise<PopulatedTransaction>;
    balanceOf(_user: string): Promise<PopulatedTransaction>;
    principalBalanceOf(_user: string): Promise<PopulatedTransaction>;
    totalSupply(): Promise<PopulatedTransaction>;
    isTransferAllowed(
      _user: string,
      _amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    getUserIndex(_user: string): Promise<PopulatedTransaction>;
    getInterestRedirectionAddress(_user: string): Promise<PopulatedTransaction>;
    getRedirectedBalance(_user: string): Promise<PopulatedTransaction>;
  };
}