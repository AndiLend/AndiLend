//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AndinLend {
	struct Loan {
		uint amount;
		uint loanTime;
    uint fee;
		uint8 interest;
		uint8 pendingFeesAmount;
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
		uint8 _pendingFeesAmount
	) external {
    uint memory fee = div(_amount, _pendingFeesAmount);
		Loan newLoanRequest = Loan(
			_amount,
      fee,
			_loanTime,
			_interest,
			_pendingFeesAmount,
			0
		);
		loans[msg.sender] = newLoanRequest;
	}

	function grantLoan(address memory _borrower) public {
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

  function payFee() external {
    require(loans[msg.sender], 'Client does not have an active loan');
    require(loans[msg.sender].status == 1, 'The loan is not active');
    // To Do review quantity

    erc20USDT.transferFrom(msg.sender, address(this), loans[msg.sender].fee);
    stake = add(stake, _loans[msg.sender].fee)
    loans[msg.sender].pendingFeesAmount = sub(loans[msg.sender].pendingFeesAmount, 1);
    if(loans[msg.sender].pendingFeesAmount == 0){
      finishLoan();
    }
  }

  function finishLoan() private {
    loans[msg.sender].status = 2;
    // To Do Add extra logic
  }

  function withdrawLend (uint _amount) external {
    require(lends[msg.sender], 'Lender not found');
    require(lends[msg.sender].amount <= _amount, 'The amount is bigger than what the lender has had lend.');
    require(_amount <= stake, 'Not enough fund to withdraw.');

		erc20USDT.transfer(msg.sender, _amount);
		stake = sub(stake, _amount);
  }

	function getLoanByAddres(address _borrower) public returns(Loan){
		return loans[_borrower];
	}

	function getLendByAddres(address _lender) public returns(Lend){
		return lends[_lender];
	}
}
