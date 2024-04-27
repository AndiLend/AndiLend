# AndiLend

## SMART CONTRACTS LINKS

- [AndinLend.sol](https://sepolia.scrollscan.com/address/0xd0fB3F0440eef72547fB0cfd4082D248ab8dc86f#code)
- [USDTMock.sol](https://sepolia.scrollscan.com/address/0xF9C619d863e7838730288C3fbc829658CaFc462c)

## Landing

- [Andin Lending](https://andin-lending.vercel.app)

## Dev Mode

After installing the packages, you should run the local hardhat node with:

```bash
yarn run chain
```

After running the node, you need to deploy all the smart contracts with:

```bash
yarn deploy
```

Then you have to add the ERC20 contract address to the AndinLend contract with the wallet that deployed the contracts. To do that, run the script `addERC20ToContract.ts` with:

```bash
yarn run addToken
```

After that, it’s possible to start the Next.js project with:

```bash
yarn run start
```

## Transfer the ERC20 Mock

Before transferring the ERC20 token to other account to make manual tests. You need to change the file `transferERC20.ts` with the contract address of the ERC20 and the address of the receiving wallet. Like this:

```bash
async function transferToken(amountToTransfer: number = 80) {
  const [sender] = await ethers.getSigners();
  // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
  const receiverAddress = "0x7671cB3d89758C6b26F06603164719eA2f8e6CaE"; // Wallet address
  const amount = ethers.parseUnits(amountToTransfer.toString(), 18);

  // Obtener el contrato ERC20
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // ERC20 address
  const Token = await ethers.getContractAt("USDTMock", tokenAddress);
  ...
}
```

And then run the following script:

```bash
yarn run transfer
```
