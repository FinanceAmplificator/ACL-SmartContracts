/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { MockAggregatorKnc } from "./MockAggregatorKnc";

export class MockAggregatorKncFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _initialAnswer: BigNumberish,
    overrides?: Overrides
  ): Promise<MockAggregatorKnc> {
    return super.deploy(_initialAnswer, overrides || {}) as Promise<
      MockAggregatorKnc
    >;
  }
  getDeployTransaction(
    _initialAnswer: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_initialAnswer, overrides || {});
  }
  attach(address: string): MockAggregatorKnc {
    return super.attach(address) as MockAggregatorKnc;
  }
  connect(signer: Signer): MockAggregatorKncFactory {
    return super.connect(signer) as MockAggregatorKncFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAggregatorKnc {
    return new Contract(address, _abi, signerOrProvider) as MockAggregatorKnc;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_initialAnswer",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161011d38038061011d8339818101604052602081101561003357600080fd5b810190808051906020019092919050505080806000819055506000817f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f426040518082815260200191505060405180910390a350506087806100966000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806350d25bcd14602d575b600080fd5b60336049565b6040518082815260200191505060405180910390f35b6000805490509056fea265627a7a7231582024dfe4b0746e63774d4c6b594ef871a9ee7256ad9fb9869f726529e92e8f0bb064736f6c63430005100032";
