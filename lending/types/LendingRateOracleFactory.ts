/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { LendingRateOracle } from "./LendingRateOracle";

export class LendingRateOracleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingRateOracle> {
    return super.deploy(overrides || {}) as Promise<LendingRateOracle>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingRateOracle {
    return super.attach(address) as LendingRateOracle;
  }
  connect(signer: Signer): LendingRateOracleFactory {
    return super.connect(signer) as LendingRateOracleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingRateOracle {
    return new Contract(address, _abi, signerOrProvider) as LendingRateOracle;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "getMarketBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256"
      }
    ],
    name: "setMarketBorrowRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "getMarketLiquidityRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256"
      }
    ],
    name: "setMarketLiquidityRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102f2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806372eb293d146100515780639f86a0ee1461009f578063bb85c0bb146100ed578063fbe5ba1e14610145575b600080fd5b61009d6004803603604081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061019d565b005b6100eb600480360360408110156100b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101e4565b005b61012f6004803603602081101561010357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061022c565b6040518082815260200191505060405180910390f35b6101876004803603602081101561015b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610274565b6040518082815260200191505060405180910390f35b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea265627a7a72315820f30657181cbb90ba754247ba6c9a03e11a0b56f07fcf3e2c43da6610a18452d464736f6c63430005100032";