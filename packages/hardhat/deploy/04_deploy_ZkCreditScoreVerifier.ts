import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "AndinLend" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployZkCreditScoreVerifier: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ZkCreditScoreVerifier", {
    from: deployer,
    args: ["0xd0fB3F0440eef72547fB0cfd4082D248ab8dc86f", "0xaD71DC80911e819796C1Fe1dd846c50B53F857D8"],
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const zkCreditScoreVerifier = await hre.ethers.getContract<Contract>("ZkCreditScoreVerifier", deployer);
  console.log("ZkCreditScoreVerifier Address: ", await zkCreditScoreVerifier.getAddress());
};

export default deployZkCreditScoreVerifier;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployZkCreditScoreVerifier.tags = ["ZkCreditScoreVerifier"];
