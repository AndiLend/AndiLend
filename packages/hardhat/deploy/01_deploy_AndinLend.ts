import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "AndinLend" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployAndinLend: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
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

  await deploy("AndinLend", {
    from: deployer,
    // Contract constructor arguments
    // USDT scroll
    // args: ["0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df"],
    // USDT Mock Scroll Sepolia
    args: ["0xF9C619d863e7838730288C3fbc829658CaFc462c"],
    // USDT Mock
    // args: ["0x5FbDB2315678afecb367f032d93F642f64180aa3"],
    log: true,
    // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
    // automatically mining the contract deployment transaction. There is no effect on live networks.
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const andinLend = await hre.ethers.getContract<Contract>("AndinLend", deployer);
  console.log("AndiLend Address: ", await andinLend.getAddress());
};

export default deployAndinLend;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployAndinLend.tags = ["AndinLend"];
