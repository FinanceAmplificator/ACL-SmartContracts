/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { DefaultReserveInterestRateStrategy } from "./DefaultReserveInterestRateStrategy";

export class DefaultReserveInterestRateStrategyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _reserve: string,
    _provider: string,
    _baseVariableBorrowRate: BigNumberish,
    _variableRateSlope1: BigNumberish,
    _variableRateSlope2: BigNumberish,
    _stableRateSlope1: BigNumberish,
    _stableRateSlope2: BigNumberish,
    overrides?: Overrides
  ): Promise<DefaultReserveInterestRateStrategy> {
    return super.deploy(
      _reserve,
      _provider,
      _baseVariableBorrowRate,
      _variableRateSlope1,
      _variableRateSlope2,
      _stableRateSlope1,
      _stableRateSlope2,
      overrides || {}
    ) as Promise<DefaultReserveInterestRateStrategy>;
  }
  getDeployTransaction(
    _reserve: string,
    _provider: string,
    _baseVariableBorrowRate: BigNumberish,
    _variableRateSlope1: BigNumberish,
    _variableRateSlope2: BigNumberish,
    _stableRateSlope1: BigNumberish,
    _stableRateSlope2: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _reserve,
      _provider,
      _baseVariableBorrowRate,
      _variableRateSlope1,
      _variableRateSlope2,
      _stableRateSlope1,
      _stableRateSlope2,
      overrides || {}
    );
  }
  attach(address: string): DefaultReserveInterestRateStrategy {
    return super.attach(address) as DefaultReserveInterestRateStrategy;
  }
  connect(signer: Signer): DefaultReserveInterestRateStrategyFactory {
    return super.connect(signer) as DefaultReserveInterestRateStrategyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefaultReserveInterestRateStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DefaultReserveInterestRateStrategy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "_provider",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_baseVariableBorrowRate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_variableRateSlope1",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_variableRateSlope2",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_stableRateSlope1",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_stableRateSlope2",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: true,
    inputs: [],
    name: "EXCESS_UTILIZATION_RATE",
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
    constant: true,
    inputs: [],
    name: "OPTIMAL_UTILIZATION_RATE",
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
    constant: true,
    inputs: [],
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "baseVariableBorrowRate",
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
    constant: true,
    inputs: [],
    name: "reserve",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "stableRateSlope1",
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
    constant: true,
    inputs: [],
    name: "stableRateSlope2",
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
    constant: true,
    inputs: [],
    name: "variableRateSlope1",
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
    constant: true,
    inputs: [],
    name: "variableRateSlope2",
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
    constant: true,
    inputs: [],
    name: "getBaseVariableBorrowRate",
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
    constant: true,
    inputs: [],
    name: "getVariableRateSlope1",
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
    constant: true,
    inputs: [],
    name: "getVariableRateSlope2",
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
    constant: true,
    inputs: [],
    name: "getStableRateSlope1",
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
    constant: true,
    inputs: [],
    name: "getStableRateSlope2",
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
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_availableLiquidity",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_totalBorrowsStable",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_totalBorrowsVariable",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_averageStableBorrowRate",
        type: "uint256"
      }
    ],
    name: "calculateInterestRates",
    outputs: [
      {
        internalType: "uint256",
        name: "currentLiquidityRate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "currentStableBorrowRate",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "currentVariableBorrowRate",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610dad380380610dad833981810160405260e081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846001819055508360028190555082600381905550816004819055508060058190555086600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050610c738061013a6000396000f3fe608060405234801561001057600080fd5b50600436106100d55760003560e01c80637b832f58116100875780637b832f581461021c578063a15f30ac1461023a578063b258954414610258578063c72c4d1014610276578063ccab01a3146102c0578063cd3293de146102de578063d5cd739114610328578063f420240914610346576100d5565b80630b3429a2146100da5780630bdf953f146100f857806314e32da414610116578063173198731461013457806334762ca51461015257806357e37af01461017057806365614f81146101fe575b600080fd5b6100e2610364565b6040518082815260200191505060405180910390f35b61010061036e565b6040518082815260200191505060405180910390f35b61011e610374565b6040518082815260200191505060405180910390f35b61013c61037e565b6040518082815260200191505060405180910390f35b61015a61038d565b6040518082815260200191505060405180910390f35b6101da600480360360a081101561018657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610397565b60405180848152602001838152602001828152602001935050505060405180910390f35b6102066106e5565b6040518082815260200191505060405180910390f35b6102246106eb565b6040518082815260200191505060405180910390f35b6102426106f1565b6040518082815260200191505060405180910390f35b610260610701565b6040518082815260200191505060405180910390f35b61027e610707565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c861072c565b6040518082815260200191505060405180910390f35b6102e6610732565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610330610758565b6040518082815260200191505060405180910390f35b61034e610762565b6040518082815260200191505060405180910390f35b6000600254905090565b60045481565b6000600554905090565b6aa56fa5b99019a5c800000081565b6000600154905090565b6000806000806103b0868861076c90919063ffffffff16565b9050600080821480156103c35750600089145b6103f1576103ec6103dd838b61076c90919063ffffffff16565b836107f490919063ffffffff16565b6103f4565b60005b90506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633618abba6040518163ffffffff1660e01b815260040160206040518083038186803b15801561045d57600080fd5b505afa158015610471573d6000803e3d6000fd5b505050506040513d602081101561048757600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663bb85c0bb8b6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561051457600080fd5b505afa158015610528573d6000803e3d6000fd5b505050506040513d602081101561053e57600080fd5b810190808051906020019092919050505093506b0295be96e6406697200000008111156106275760006105a36aa56fa5b99019a5c80000006105956b0295be96e6406697200000008561085090919063ffffffff16565b6107f490919063ffffffff16565b90506105e06105bd8260055461089a90919063ffffffff16565b6105d26004548861076c90919063ffffffff16565b61076c90919063ffffffff16565b945061061f6105fa8260035461089a90919063ffffffff16565b61061160025460015461076c90919063ffffffff16565b61076c90919063ffffffff16565b9350506106b8565b61066c61065d61064c6b0295be96e640669720000000846107f490919063ffffffff16565b60045461089a90919063ffffffff16565b8561076c90919063ffffffff16565b93506106b56106a46002546106966b0295be96e640669720000000856107f490919063ffffffff16565b61089a90919063ffffffff16565b60015461076c90919063ffffffff16565b92505b6106d6816106c88a8a878b6108fd565b61089a90919063ffffffff16565b94505050955095509592505050565b60035481565b60025481565b6b0295be96e64066972000000081565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600454905090565b6000600354905090565b6000808284019050838110156107ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000806002838161080157fe5b0490506108478361083961082a6b033b2e3c9fd0803ce8000000886109a790919063ffffffff16565b8461076c90919063ffffffff16565b610a2d90919063ffffffff16565b91505092915050565b600061089283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a77565b905092915050565b60006108f56b033b2e3c9fd0803ce80000006108e76108c285876109a790919063ffffffff16565b60026b033b2e3c9fd0803ce8000000816108d857fe5b0461076c90919063ffffffff16565b610a2d90919063ffffffff16565b905092915050565b600080610913858761076c90919063ffffffff16565b9050600081141561092857600091505061099f565b60006109458561093788610b37565b61089a90919063ffffffff16565b90506000610964856109568a610b37565b61089a90919063ffffffff16565b9050600061099561097485610b37565b610987848661076c90919063ffffffff16565b6107f490919063ffffffff16565b9050809450505050505b949350505050565b6000808314156109ba5760009050610a27565b60008284029050828482816109cb57fe5b0414610a22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c1e6021913960400191505060405180910390fd5b809150505b92915050565b6000610a6f83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610b57565b905092915050565b6000838311158290610b24576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ae9578082015181840152602081019050610ace565b50505050905090810190601f168015610b165780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000610b50633b9aca00836109a790919063ffffffff16565b9050919050565b60008083118290610c03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bc8578082015181840152602081019050610bad565b50505050905090810190601f168015610bf55780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610c0f57fe5b04905080915050939250505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a265627a7a723158205ab2922654eaad50bcb577ee8c2a90eb93550c7332dff03fb2c3921a54006e5e64736f6c63430005100032";