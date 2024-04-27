// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

interface IUltraVerifier {
    function verify(bytes calldata _proof, bytes32[] calldata _publicInputs) external view returns (bool);
}

interface IAndinLend {
    function addBorrowerQualification(address borrower, uint8 qualification) external;
}

contract ZkCreditScoreVerifier
{
    IUltraVerifier ultraVerifier;
    IAndinLend andinLend;

    constructor(address ultraVerifierAddress, address andinLendAddress)
    {
        ultraVerifier = IUltraVerifier(ultraVerifierAddress);
        andinLend = IAndinLend(andinLendAddress);
    }

    function sendProof(bytes calldata _proof, bytes32[] calldata _publicInputs) public
    {
        ultraVerifier.verify(_proof, _publicInputs);
        uint8 qualification = uint8(uint(_publicInputs[0]));
        andinLend.addBorrowerQualification(msg.sender, qualification);
    }
}