# AndiLend

## SMART CONTRACTS LINKS

### Arbitrum Sepolia

- [AndinLend.sol](https://sepolia.arbiscan.io/address/0xaD71DC80911e819796C1Fe1dd846c50B53F857D8)
- [USDTMock.sol](https://sepolia.arbiscan.io/address/0x36BfA555569956955380070F7163ecB32950134C)
- [UltraVerifier.sol](https://sepolia.arbiscan.io/address/0x9899698f9D43C816dBa1c3a626eD4206f46d4E19)
- [ZkCreditScoreVerifier.sol](https://sepolia.arbiscan.io/address/0x0Fe23961eed70604397e0c4a4F5F181f6D321539)

### ScrollSepolia

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
