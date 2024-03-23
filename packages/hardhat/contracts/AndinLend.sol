//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

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

	event RequestedLoan(
		address borrower,
		Loan loan,
	);

	event GrantedLoan(
		address borrower,
		address lender,
		Loan loan,
	);

	event PaidFee(
		address borrower,
		address lender,
		Loan loan,
	);

	event FinishLoan(
		address borrower,
		address lender,
		Loan loan,
	);

	IERC20 private erc20USDT;
	// Verifier private verifier

	constructor(address _erc20USDTAddress, address _verifier) {
		erc20USDT = IERC20(_erc20USDTAddress);
		verifier = Verifer(_verifier);
	}

	function requestLoan(
		uint _amount,
		uint _loanTime,
		uint8 _interest,
		uint8 _pendingFeesCount,
		uint8 _creditScore,
		bytes _proof
	) external {
		uint memory weeks = div(_loanTime, 604800);
		uint memory balanceDue = add(mul(mul(div(_interest, 100), weeks), _amount), _amount);
    uint memory fee = div(_balanceDue, _pendingFeesCount);
		Loan newLoanRequest = Loan(
			_amount,
      fee,
			_loanTime,
			_interest,
			_creditScore
			_pendingFeesCount,
			uint8(0),
			_proof
		);
		loans[msg.sender] = newLoanRequest;
		emit(RequestedLoan(msg.sender, newLoanRequest));
	}

	function grantLoan(address memory _borrower) public {
		require(
			loans[_borrower],
			"The client does not have a loan requirement"
		);
		require(loans[_borrower].status == 0, "The loan is not pending");
		require(erc20USDT.balanceOf(msg.sender) > loans[_borrower].amount, 'Insufficient USDT balance.');

		erc20USDT.transferFrom(msg.sender, _borrower, loans[_borrower].amount);
		loans[_borrower].status = 1;
		borrowerToLender[_borrower] = msg.sender;
		lenderToBorrowers[msg.sender].push(_borrower);
		emit GrantedLoan(_borrower, msg.sender, loans[_borrower]);
	}

  function payFee(address _lender) external {
    require(loans[msg.sender], 'Client does not have an active loan.');
    require(loans[msg.sender].status == 1, 'The loan is not active.');
		require(erc20USDT.balanceOf(msg.sender) > loans[msg.sender].fee, 'Insufficient USDT balance.');
		require(borrowerToLender[msg.sender] == _lender, "The address is not the lender of this loan.")

    erc20USDT.transferFrom(msg.sender, _lender, loans[msg.sender].fee);
    loans[msg.sender].pendingFeesAmount = sub(loans[msg.sender].pendingFeesAmount, 1);
		emit PaidFee( msg.sender, _lender, loans[msg.sender]);
    if(loans[msg.sender].pendingFeesAmount == 0){
      finishLoan(_lender);
    }
  }

  function finishLoan(address _lender) private {
    loans[msg.sender].status = 2;
		emit FinishLoan( msg.sender, _lender, loans[msg.sender]);
  }

	function getLoanByAddress(address _borrower) external view returns(Loan){
		return loans[_borrower];
	}

	function getLoansByLend(address _lender) external view returns(Loan[]){
		Loan[] memory loansByLend;
		address[] memory borrowers = lenderToBorrowers[_lender];

		for(uint i = 0; i < borrowers.length; i++){
			address borrower = borrowers[i];
			loansByLend.push(loans[borrower]);
		}

		return loansByLend;
	}
}
