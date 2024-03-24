import { expect } from "chai";
import { ethers } from "hardhat";
import { AndinLend, USDTMock } from "../typechain-types";
import { Signer } from "ethers";

describe("AndinLend", function () {
  let andinLend: AndinLend;
  let usdtMock: USDTMock;
  let owner: Signer, account1: Signer, account2: Signer;
  before(async () => {
    [owner, account1, account2] = await ethers.getSigners();

    // Deploy USDT mock
    const usdtMockFactory = await ethers.getContractFactory("USDTMock", owner);
    const totalSupply = (10 ** 9).toString();
    usdtMock = (await usdtMockFactory.deploy(ethers.parseEther(totalSupply))) as USDTMock;
    await usdtMock.waitForDeployment();

    // Transfer USDT to accounts
    const balance1 = (500 * 10 ** 6).toString();
    await usdtMock.transfer(account1.getAddress(), balance1);
    const balance2 = (1000 * 10 ** 6).toString();
    await usdtMock.transfer(account2.getAddress(), balance2);

    // Deploy AndinLend
    const andinLendFactory = await ethers.getContractFactory("AndinLend", owner);
    const usdtAddress = await usdtMock.getAddress();
    // const verifierAddress = "";
    andinLend = (await andinLendFactory.deploy(usdtAddress)) as AndinLend;
    await andinLend.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should request a loan", async function () {
      const amount = (5 * 10 ** 6).toString();
      const loanTime = (121 * 10 ** 4).toString();
      const interest = (14).toString();
      const pendingFeesCount = (2).toString();
      const creditScore = (2).toString();
      const proof = (1).toString();
      const andinLendAccount1 = andinLend.connect(account1);
      await andinLendAccount1.requestLoan(
        amount,
        loanTime,
        interest,
        pendingFeesCount,
        creditScore,
        ethers.toUtf8Bytes(proof),
      );
      const loanAccount1 = await andinLend.getLoanByAddress(await account1.getAddress());
      expect(loanAccount1[1]).to.be.equal(6400000n);
    });

    it("Should grant loan", async function () {
      const andinLendAccount2 = andinLend.connect(account2);

      let balanceAccount1 = await usdtMock.balanceOf(await account1.getAddress());
      let balanceAccount2 = await usdtMock.balanceOf(await account2.getAddress());
      console.log(balanceAccount1);
      console.log(balanceAccount2);
      await andinLendAccount2.grantLoan(await account1.getAddress());
      balanceAccount1 = await usdtMock.balanceOf(await account1.getAddress());
      balanceAccount2 = await usdtMock.balanceOf(await account2.getAddress());
      console.log(balanceAccount1);
      console.log(balanceAccount2);
    });
  });
});
