/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Verifier } from "../Verifier";

export class Verifier__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier> {
    return super.deploy(overrides || {}) as Promise<Verifier>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier {
    return super.attach(address) as Verifier;
  }
  connect(signer: Signer): Verifier__factory {
    return super.connect(signer) as Verifier__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier {
    return new Contract(address, _abi, signerOrProvider) as Verifier;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[16]",
        name: "input",
        type: "uint256[16]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611976806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c82febf514610030575b600080fd5b610190600480360361030081101561004757600080fd5b8101908080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908060800190600280602002604051908101604052809291906000905b828210156100fc578382604002016002806020026040519081016040528092919082600260200280828437600081840152601f19601f820116905080830192505050505050815260200190600101906100a8565b50505050919291929080604001906002806020026040519081016040528092919082600260200280828437600081840152601f19601f82011690508083019250505050505091929192908061020001906010806020026040519081016040528092919082601060200280828437600081840152601f19601f82011690508083019250505050505091929192905050506101aa565b604051808215151515815260200191505060405180910390f35b60006101b46117fe565b6040518060400160405280876000600281106101cc57fe5b60200201518152602001876001600281106101e357fe5b60200201518152508160000181905250604051806040016040528060405180604001604052808860006002811061021657fe5b602002015160006002811061022757fe5b602002015181526020018860006002811061023e57fe5b602002015160016002811061024f57fe5b6020020151815250815260200160405180604001604052808860016002811061027457fe5b602002015160006002811061028557fe5b602002015181526020018860016002811061029c57fe5b60200201516001600281106102ad57fe5b602002015181525081525081602001819052506040518060400160405280856000600281106102d857fe5b60200201518152602001856001600281106102ef57fe5b602002015181525081604001819052506060601067ffffffffffffffff8111801561031957600080fd5b506040519080825280602002602001820160405280156103485781602001602082028036833780820191505090505b50905060008090505b60108110156103905784816010811061036657fe5b602002015182828151811061037757fe5b6020026020010181815250508080600101915050610351565b50600061039d82846103bd565b14156103ae576001925050506103b5565b6000925050505b949350505050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000190506103eb611831565b6103f36105f1565b9050806080015151600186510114610473576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f76657269666965722d6261642d696e707574000000000000000000000000000081525060200191505060405180910390fd5b61047b611878565b6040518060400160405280600081526020016000815250905060008090505b865181101561057a57838782815181106104b057fe5b60200260200101511061052b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640081525060200191505060405180910390fd5b61056b826105668560800151600185018151811061054557fe5b60200260200101518a858151811061055957fe5b6020026020010151611081565b61117c565b9150808060010191505061049a565b5061059d81836080015160008151811061059057fe5b602002602001015161117c565b90506105d36105af8660000151611296565b8660200151846000015185602001518587604001518b604001518960600151611330565b6105e357600193505050506105eb565b600093505050505b92915050565b6105f9611831565b60405180604001604052807f10874330109a8260755d299fadbe26f1aa071a0f1bf8f55c2c6f4cacba078c9b81526020017f0e47055f016756471d838c506da93c86b7a3e90ee07ae08b5583d964d2bdffbd8152508160000181905250604051806040016040528060405180604001604052807f12386eb7de2eb453e04faeeb3891f54c69a120c7725a3ff0fd2db2fc77a9f64c81526020017f121d0531f72eaacefa82984e8fdae4f549517150259dda6078e1457586edccc1815250815260200160405180604001604052807f010a7c57f6a3b14577762154bca18eb1a9c2668f98941a386ba5380691b221e981526020017f0ab8254e762b3b728e08772925303dc3dae405383707eaacce09b9113586d4a08152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f03f750eb84a2e4712dc6a31a27c300fdf07c0fb906d35151926ac0b9be6e861b81526020017f076324481fcc57bac1c7bf240a207d081dd057e010a9cc0e2700ece7e1f86b51815250815260200160405180604001604052807f29c83c7e35a2757380001cca265f4076b07f70047b005c8caeb121b06d4c842981526020017f09d26bdb977ca004f780642f08cf461cc7db5aa2deda73703317160e504641078152508152508160600181905250601167ffffffffffffffff811180156108bd57600080fd5b506040519080825280602002602001820160405280156108f757816020015b6108e4611878565b8152602001906001900390816108dc5790505b50816080018190525060405180604001604052807f05d506afe0a382b35d093db8602b78125257aacce531a109ad0536c2c2a844e081526020017f2b475122cafa7ac82b301b232b4a7d1b2b48f95994778e0a1294929a5d618992815250816080015160008151811061096657fe5b602002602001018190525060405180604001604052807f1531a4785ab2377cb6e77772f2e3d31729202c68fd83107e4664a0763a82ef3a81526020017f2fe54d99111ac51a530c0db9e6274ff21310bdd9abd13b232b8998b1c6208a0081525081608001516001815181106109d757fe5b602002602001018190525060405180604001604052807f1b445efb3821d0b6e6b1ec3a3a8743d88ad756a5244b6264f4d5dd2cf96add5d81526020017e0af5d680c0a78dedc0ed862b1baa6c483e642439e304a23d391a2991d78a168152508160800151600281518110610a4757fe5b602002602001018190525060405180604001604052807f1ac78fce0641adb8c4a1a24b8926ead298fb7142ba9969e149ebd79dd47bf1e581526020017f16e68c366aabad28c2b72302199c1e1674d13ceafc2ea2898f94be5f8de45ec28152508160800151600381518110610ab857fe5b602002602001018190525060405180604001604052807f054a91fe1bd3fec1ce11ba3effc2f3ac0257eb753a83c3df2dc27dff768db06c81526020017f0b9c5914c0d5cae089402165b6192eaf972e5ba1c2642f6e8ee4c9f733c602778152508160800151600481518110610b2957fe5b602002602001018190525060405180604001604052807f2a0d6affdb2c49f576ff7add4abb4551b7d270b935d304ddcc14bb10479539b881526020017e6d5b897d4e625886aa1bb1a49ce2f34c85fb4824ebf6f34121c7d330a8b52d8152508160800151600581518110610b9957fe5b602002602001018190525060405180604001604052807f10bf601250ab8f83f266f0e758c87549006e88280b484f265c00b01f4260e8a181526020017f255b66fa57ec8b0ab4848287e3e11332257913fdf91000eb5b45b419b36194988152508160800151600681518110610c0a57fe5b602002602001018190525060405180604001604052807f04b11e7e296b8243fcb5fd04b697cf0554aece0499a6cbe515c687050a40e6f281526020017f2cd174e1e08924220d2ca156ff02702b39cdf9a3f20e6b1f1645dd237702fa698152508160800151600781518110610c7b57fe5b602002602001018190525060405180604001604052807f2355aa91a1b7055547f03349f8b3703169600c0eb338afd3b62d91616e32883b81526020017f0ca86e970c42651bab6f3bff431aa81440d0955e7db89ef8f0554ac086c96af08152508160800151600881518110610cec57fe5b602002602001018190525060405180604001604052807f2f3be1fc058f8e3620bc329a3407ee5f9033afd8999d5151da1b7c881b992bdf81526020017f1d3f1f884075ed00dcfe8de305985b657362955b642c13a0889be6d2c36876fc8152508160800151600981518110610d5d57fe5b602002602001018190525060405180604001604052807f06750e229f235d18288969758771ae2a3e662aae615ac6ec1c8750c5dfdd681081526020017f1d08339c98b432f07338a78c48f36e4a0baebdeddbaea7322fe650b70a21b7fa8152508160800151600a81518110610dce57fe5b602002602001018190525060405180604001604052807f2b6d3e235da2c6fe8fdff0437a114157984ca84dcb765ad42501c3f6e231aa4681526020017f1174a8f3b1cb62be1943787b386c19ba605266351937ad9037d0814b21d23ad78152508160800151600b81518110610e3f57fe5b602002602001018190525060405180604001604052807f130c8be4bc6c17e5c7ea29c980d2d6e001666ac542ffa80e5f1a54b333e4628381526020017f1f083abc871a0f6605b21cdebdd0c01c4de498314d21283c8d861d1f26cc8fdb8152508160800151600c81518110610eb057fe5b602002602001018190525060405180604001604052807e4f020da15e9ca33e8674391ce0658c5c539cedd770bb4a1d2248149ee4b5b981526020017f2f0199fe004fc957c3387e4de2c4ab05eb87f2a111dd60c5d28290ed1b3cc3e68152508160800151600d81518110610f2057fe5b602002602001018190525060405180604001604052807f09332fe47bf70759194806b5e85cac2839240c235c368269c6f037c35e4a489a81526020017f22731ebf6c9f360d9144aaf8ab175041c16d5c68903a2bc76feb1ab111b255328152508160800151600e81518110610f9157fe5b602002602001018190525060405180604001604052807f2823d25fb0e097ad8614c4e038db24ed7e81ef1a9e11e8f6abcea8a2105a369b81526020017f05c4a5d2b0b6498e1d76ce071c21c990d1dfa0ceebdcb6d90d534733dbbdca728152508160800151600f8151811061100257fe5b602002602001018190525060405180604001604052807f2f4eb5169c8c4c4f7807c16ecc13ab7a12248480a04978f992b529f62fbe8adb81526020017f174c70170d33e33711a3e6814a8de65c658f58e905ce4410a27f6b691378cf17815250816080015160108151811061107357fe5b602002602001018190525090565b611089611878565b611091611892565b8360000151816000600381106110a357fe5b6020020181815250508360200151816001600381106110be57fe5b60200201818152505082816002600381106110d557fe5b602002018181525050600060608360808460076107d05a03fa905080600081146110fe57611100565bfe5b5080611174576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f70616972696e672d6d756c2d6661696c6564000000000000000000000000000081525060200191505060405180910390fd5b505092915050565b611184611878565b61118c6118b4565b83600001518160006004811061119e57fe5b6020020181815250508360200151816001600481106111b957fe5b6020020181815250508260000151816002600481106111d457fe5b6020020181815250508260200151816003600481106111ef57fe5b602002018181525050600060608360c08460066107d05a03fa905080600081146112185761121a565bfe5b508061128e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f70616972696e672d6164642d6661696c6564000000000000000000000000000081525060200191505060405180910390fd5b505092915050565b61129e611878565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479050600083600001511480156112db575060008360200151145b156112ff57604051806040016040528060008152602001600081525091505061132b565b6040518060400160405280846000015181526020018285602001518161132157fe5b0683038152509150505b919050565b60006060600467ffffffffffffffff8111801561134c57600080fd5b5060405190808252806020026020018201604052801561138657816020015b611373611878565b81526020019060019003908161136b5790505b5090506060600467ffffffffffffffff811180156113a357600080fd5b506040519080825280602002602001820160405280156113dd57816020015b6113ca6118d6565b8152602001906001900390816113c25790505b5090508a826000815181106113ee57fe5b6020026020010181905250888260018151811061140757fe5b6020026020010181905250868260028151811061142057fe5b6020026020010181905250848260038151811061143957fe5b6020026020010181905250898160008151811061145257fe5b6020026020010181905250878160018151811061146b57fe5b6020026020010181905250858160028151811061148457fe5b6020026020010181905250838160038151811061149d57fe5b60200260200101819052506114b282826114c2565b9250505098975050505050505050565b6000815183511461153b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f70616972696e672d6c656e677468732d6661696c65640000000000000000000081525060200191505060405180910390fd5b600083519050600060068202905060608167ffffffffffffffff8111801561156257600080fd5b506040519080825280602002602001820160405280156115915781602001602082028036833780820191505090505b50905060008090505b83811015611737578681815181106115ae57fe5b6020026020010151600001518260006006840201815181106115cc57fe5b6020026020010181815250508681815181106115e457fe5b60200260200101516020015182600160068402018151811061160257fe5b60200260200101818152505085818151811061161a57fe5b60200260200101516000015160006002811061163257fe5b602002015182600260068402018151811061164957fe5b60200260200101818152505085818151811061166157fe5b60200260200101516000015160016002811061167957fe5b602002015182600360068402018151811061169057fe5b6020026020010181815250508581815181106116a857fe5b6020026020010151602001516000600281106116c057fe5b60200201518260046006840201815181106116d757fe5b6020026020010181815250508581815181106116ef57fe5b60200260200101516020015160016002811061170757fe5b602002015182600560068402018151811061171e57fe5b602002602001018181525050808060010191505061159a565b506117406118fc565b6000602082602086026020860160086107d05a03fa9050806000811461176557611767565bfe5b50806117db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f70616972696e672d6f70636f64652d6661696c6564000000000000000000000081525060200191505060405180910390fd5b6000826000600181106117ea57fe5b602002015114159550505050505092915050565b6040518060600160405280611811611878565b815260200161181e6118d6565b815260200161182b611878565b81525090565b6040518060a00160405280611844611878565b81526020016118516118d6565b815260200161185e6118d6565b815260200161186b6118d6565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b60405180604001604052806118e961191e565b81526020016118f661191e565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b604051806040016040528060029060208202803683378082019150509050509056fea26469706673582212200bf3284568049901ba81f5926284076f21e499bf4035673f1f34ac68714cb7a564736f6c634300060b0033";
