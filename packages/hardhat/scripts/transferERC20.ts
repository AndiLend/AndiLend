import { ethers } from "hardhat";

async function transferToken(amountToTransfer: number = 80) {
  const [sender] = await ethers.getSigners();
  // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  const receiverAddress = "0x7671cB3d89758C6b26F06603164719eA2f8e6CaE"; // Dirección de la cuenta receptora
  const amount = ethers.parseUnits(amountToTransfer.toString(), 18); // Cantidad de tokens a transferir, reemplaza X con la cantidad deseada

  // Obtener el contrato ERC20
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Dirección del contrato ERC20
  const Token = await ethers.getContractAt("USDTMock", tokenAddress);
  const balanceSender = await Token.balanceOf(sender);
  console.log("sender balance", balanceSender);

  // Realizar la transferencia de tokens
  console.log(`Transfering ${amount.toString()} tokens from ${sender.address} to ${receiverAddress}...`);
  await Token.connect(sender).transfer(receiverAddress, amount);
  const balance = await Token.balanceOf(receiverAddress);
  console.log("receiver balance", balance);

  console.log("Transfer completed.");
}

// Necesario para poder ejecutar este script con Hardhat
transferToken()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
