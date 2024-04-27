import { ethers } from "hardhat";

async function addERC20ToContract() {
  const [sender] = await ethers.getSigners();

  // Obtener el contrato ERC20
  const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Dirección del contrato ERC20
  const andinLendAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const AndinLend = await ethers.getContractAt("AndinLend", andinLendAddress);
  console.log("Setting addres contract to: ", tokenAddress);
  await AndinLend.connect(sender).setERC20ContractAddress(tokenAddress);
  const contractERC20Address = await AndinLend.erc20USDTAddress();
  if (contractERC20Address === tokenAddress) {
    console.log("Address setted correctly", contractERC20Address);
  } else {
    console.log("Addresses don't match.");
    console.log("Token Address:", tokenAddress);
    console.log("Contract Address:", contractERC20Address);
  }
  console.log("Process completed.");
}

// Necesario para poder ejecutar este script con Hardhat
addERC20ToContract()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
