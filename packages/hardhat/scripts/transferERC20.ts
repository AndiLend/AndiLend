import { ethers } from "hardhat";

async function transferToken(amountToTransfer: number = 1) {
  const [sender] = await ethers.getSigners();
  // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  const receiverAddress = "0x5fDF2F46959bD37ba72C06aB523CAC3F88291756"; // Dirección de la cuenta receptora
  const amount = ethers.parseUnits(amountToTransfer.toString(), 18);

  // Obtener el contrato ERC20
  const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Dirección del contrato ERC20
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
