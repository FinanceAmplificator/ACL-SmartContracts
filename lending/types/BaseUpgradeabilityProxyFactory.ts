/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { BaseUpgradeabilityProxy } from "./BaseUpgradeabilityProxy";

export class BaseUpgradeabilityProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BaseUpgradeabilityProxy> {
    return super.deploy(overrides || {}) as Promise<BaseUpgradeabilityProxy>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BaseUpgradeabilityProxy {
    return super.attach(address) as BaseUpgradeabilityProxy;
  }
  connect(signer: Signer): BaseUpgradeabilityProxyFactory {
    return super.connect(signer) as BaseUpgradeabilityProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseUpgradeabilityProxy;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ad8061001f6000396000f3fe6080604052600a600c565b005b60126020565b601e601a6022565b6053565b565b565b6000807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b9050805491505090565b3660008037600080366000845af43d6000803e80600081146073573d6000f35b3d6000fdfea265627a7a7231582044ae7984519736ff0323019cf5b076c0f3b6e5675f8a694aeed549454c27805e64736f6c63430005100032";