//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol";

/**
 * A smart contract that allows users to create loans requests and lenders to borrow USDTs
 * Also returns the lender the borrowed money.
 */
contract AndinLend {
	struct Loan {
		uint amount;
		uint balanceDue;
		uint loanTime;
		uint fee;
		uint8 interest;
		uint8 creditScore;
		uint8 pendingFeesCount;
		uint8 status;
		bytes proof;
	}

	mapping(address => Loan) public loans;
	mapping(address => address) private borrowerToLender;
	mapping(address => address[]) private lenderToBorrowers;
	address[] private borrowersRegister;

	event RequestedLoan(address borrower, Loan loan);

	event GrantedLoan(address borrower, address lender, Loan loan);

	event PaidFee(address borrower, address lender, Loan loan);

	event FinishLoan(address borrower, address lender, Loan loan);

	IERC20 private erc20USDT;

	constructor(address _erc20USDTAddress) {
		erc20USDT = IERC20(_erc20USDTAddress);
	}

	function requestLoan(
		uint _amount,
		uint _loanTime,
		uint8 _interest,
		uint8 _pendingFeesCount,
		uint8 _creditScore,
		bytes memory _proof
	) external {
		require(
			loans[msg.sender].loanTime == 0 || loans[msg.sender].status == 2,
			"Each user can only have one active loan."
		);
		uint dueWeeks = _loanTime / 604800;
		uint balanceDue = ((_interest * dueWeeks * _amount) / 100) + _amount;
		uint fee = balanceDue / _pendingFeesCount;
		Loan memory newLoanRequest = Loan(
			_amount,
			balanceDue,
			_loanTime,
			fee,
			_interest,
			_creditScore,
			_pendingFeesCount,
			uint8(0),
			_proof
		);
		if (loans[msg.sender].status != 2) {
			borrowersRegister.push(msg.sender);
		}
		loans[msg.sender] = newLoanRequest;
		emit RequestedLoan(msg.sender, newLoanRequest);
	}

	function grantLoan(address _borrower) public {
		require(
			loans[_borrower].loanTime != 0,
			"The client does not have a loan requirement"
		);
		require(loans[_borrower].status == 0, "The loan is not pending");
		require(
			erc20USDT.balanceOf(msg.sender) > loans[_borrower].amount,
			"Insufficient USDT balance."
		);
		require(
			erc20USDT.allowance(msg.sender, address(this)) >=
				loans[_borrower].amount,
			"Insufficient USDT balance allowance."
		);

		erc20USDT.transferFrom(msg.sender, _borrower, loans[_borrower].amount);
		loans[_borrower].status = 1;
		borrowerToLender[_borrower] = msg.sender;
		lenderToBorrowers[msg.sender].push(_borrower);
		emit GrantedLoan(_borrower, msg.sender, loans[_borrower]);
	}

	function payFee(address _lender) external {
		require(
			loans[msg.sender].loanTime != 0,
			"Client does not have an active loan."
		);
		require(loans[msg.sender].status == 1, "The loan is not active.");
		require(
			erc20USDT.balanceOf(msg.sender) > loans[msg.sender].fee,
			"Insufficient USDT balance."
		);
		require(
			borrowerToLender[msg.sender] == _lender,
			"The address is not the lender of this loan."
		);

		erc20USDT.transferFrom(msg.sender, _lender, loans[msg.sender].fee);
		loans[msg.sender].pendingFeesCount =
			loans[msg.sender].pendingFeesCount -
			1;
		emit PaidFee(msg.sender, _lender, loans[msg.sender]);
		if (loans[msg.sender].pendingFeesCount == 0) {
			finishLoan(_lender);
		}
	}

	function finishLoan(address _lender) private {
		loans[msg.sender].status = 2;
		emit FinishLoan(msg.sender, _lender, loans[msg.sender]);
	}

	function getLenderByBorrowerAddress(
		address _borrower
	) external view returns (address) {
		return borrowerToLender[_borrower];
	}

	function getLoansByLend(
		address _lender
	) external view returns (Loan[] memory) {
		uint loansByLendCount = lenderToBorrowers[_lender].length;
		Loan[] memory loansByLend = new Loan[](loansByLendCount);
		address[] memory borrowers = lenderToBorrowers[_lender];

		for (uint i = 0; i < borrowers.length; i++) {
			address borrower = borrowers[i];
			loansByLend[i] = loans[borrower];
		}

		return loansByLend;
	}

	function getAllLoans()
		external
		view
		returns (Loan[] memory, address[] memory)
	{
		uint addressesCount = borrowersRegister.length;
		Loan[] memory allLoans = new Loan[](addressesCount);

		for (uint i = 0; i < addressesCount; i++) {
			address borrower = borrowersRegister[i];
			allLoans[i] = loans[borrower];
		}

		return (allLoans, borrowersRegister);
	}

	// get all loans with status = 0
	function getAllPendingLoans() external view returns (Loan[] memory, address[] memory) {
		Loan[] memory pendingLoans = new Loan[](borrowersRegister.length);
		for (uint i = 0; i < borrowersRegister.length; i++) {
			address borrower = borrowersRegister[i];
			if (loans[borrower].status == 0) {
				pendingLoans[i] = loans[borrower];
			}
		}
		return (pendingLoans, borrowersRegister);
	}
}