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
    const balance1 = (100 * 10 ** 6).toString();
    await usdtMock.transfer(account1.getAddress(), balance1);
    const balance2 = (200 * 10 ** 6).toString();
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
      const amount = (50 * 10 ** 6).toString();
      const loanTime = (121 * 10 ** 4).toString();
      const interest = (14).toString();
      const pendingFeesCount = (2).toString();
      const andinLendAccount1 = andinLend.connect(account1);
      await andinLendAccount1.requestLoan(amount, loanTime, interest, pendingFeesCount);
      const loanAccount1 = await andinLend.loans(await account1.getAddress());
      expect(loanAccount1[1]).to.be.equal(64000000n);
    });

    it("Should grant loan", async function () {
      const andinLendAccount2 = andinLend.connect(account2);

      let loanAccount1 = await andinLend.loans(await account1.getAddress());
      await usdtMock.connect(account2).approve(await andinLend.getAddress(), loanAccount1[0]);
      await andinLendAccount2.grantLoan(await account1.getAddress());
      const balanceAccount1 = await usdtMock.balanceOf(await account1.getAddress());
      const balanceAccount2 = await usdtMock.balanceOf(await account2.getAddress());
      expect(balanceAccount1).to.be.equal(150000000n);
      expect(balanceAccount2).to.be.equal(150000000n);
      loanAccount1 = await andinLend.loans(await account1.getAddress());
      expect(loanAccount1[7]).to.be.equal(1n);
    });

    it("Should pay fee", async function () {
      const andinLendAccount1 = andinLend.connect(account1);
      const addressAccount1 = await account1.getAddress();

      let loanAccount1 = await andinLend.loans(addressAccount1);
      await usdtMock.connect(account1).approve(await andinLend.getAddress(), loanAccount1[3]);
      const addressLender = await andinLendAccount1.getLenderByBorrowerAddress(addressAccount1);
      await andinLendAccount1.payFee(addressLender);
      const balanceAccount1 = await usdtMock.balanceOf(addressAccount1);
      const balanceAccount2 = await usdtMock.balanceOf(addressLender);
      expect(balanceAccount1).to.be.equal(118000000n);
      expect(balanceAccount2).to.be.equal(182000000n);
      loanAccount1 = await andinLend.loans(addressAccount1);
      expect(loanAccount1[6]).to.be.equal(1n);
    });

    it("Should pay fee and finish the loan", async function () {
      const andinLendAccount1 = andinLend.connect(account1);
      const addressAccount1 = await account1.getAddress();

      let loanAccount1 = await andinLend.loans(addressAccount1);
      await usdtMock.connect(account1).approve(await andinLend.getAddress(), loanAccount1[3]);
      const addressLender = await andinLendAccount1.getLenderByBorrowerAddress(addressAccount1);
      await andinLendAccount1.payFee(addressLender);
      const balanceAccount1 = await usdtMock.balanceOf(addressAccount1);
      const balanceAccount2 = await usdtMock.balanceOf(addressLender);
      expect(balanceAccount1).to.be.equal(86000000n);
      expect(balanceAccount2).to.be.equal(214000000n);
      loanAccount1 = await andinLend.loans(addressAccount1);
      expect(loanAccount1[6]).to.be.equal(0n);
      expect(loanAccount1[7]).to.be.equal(2n);
    });
  });
});
