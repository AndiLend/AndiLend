//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AndiLend {
	struct Loan {
		uint amount;
		uint loanTime;
		uint8 interest;
		uint8 feesAmount;
		uint8 status;
	}

	struct Lend {
		uint amount;
		uint8 interest;
	}

	mapping(address => Loan) private loans;
	mapping(address => Lend) private lends;

	IERC20 private erc20USDT;
	// mapping(IERC20 => uint) private stake;
	uint private stake;

	constructor(address _erc20USDTAddress) {
		erc20USDT = IERC20(_erc20USDTAddress);
	}

	function requestLoan(
		uint _amount,
		uint _loanTime,
		uint8 _interest,
		uint8 _feesAmount
	) external {
		Loan newLoanRequest = Loan(
			_amount,
			_loanTime,
			_interest,
			_feesAmount,
			0
		);
		loans[msg.sender] = newLoanRequest;
	}

	function grantLoan(address _borrower) public {
		require(
			loans[_borrower],
			"The client does not have a loan requirement"
		);
		require(loans[_borrower].status == 0, "The loan is not pending");
		require(loans[_borrower].amount <= stake, "Not enough founds to loan");

		loans[_borrower].status = 1;
		erc20USDT.transfer(_borrower, loans[_borrower].amount);
		stake = sub(stake, loans[_borrower].amount);
	}

  function lend(uint _amount) external {
    require(_amount > 0, 'A positive amount is required');
    // To Do review if sender has enough tokens.
    // To Do review if sender has a previous lend.

    Lend newLend = Lend(_amount, 14);
    lends[msg.sender] = newLend

    erc20USDT.transferFrom(msg.sender, address(this), _amount);
    stake = add(stake, _amount);

  }
}
