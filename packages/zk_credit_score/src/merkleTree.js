const fs = require("fs");

function generateProverToml(address, creditScore) {
    // Left-pad the Ethereum address and number with zeros to make them 64 bytes long
    const paddedLeafLeft = "0x" + address.slice(2).padStart(64, '0');
    const paddedLeafRight = "0x" + creditScore.toString(16).padStart(64, '0');

    // Construct the Prover.toml content
    const tomlContent = `
[index]
value = "0"

[leafLeft]
value = "${paddedLeafLeft}"

[leafRight]
value = "${paddedLeafRight}"
`;

    return tomlContent;
}

function generateZeroProverToml(){
    const address ="0x0000000000000000000000000000000000000000";
    const creditScore = 0;
    return generateProverToml(address, creditScore)
}

function generateRoot(address, creditScore){
    generateProverToml(address, creditScore);

}

function createLeaf(address, creditScore) {
    // Remove '0x' prefix from the address
    const cleanAddress = address.slice(2);

    // Convert credit score to hexadecimal string and pad with zeros to make it 32 bytes
    const hexCreditScore = String(creditScore).padStart(24, '0');

    // Ensure that the address is exactly 40 characters long (20 bytes)
    const paddedAddress = cleanAddress.padEnd(40, '0');

    // Concatenate the padded address and padded credit score to form the leaf value
    const leafValue = `0x${paddedAddress}${hexCreditScore}`;

    return leafValue;
}

// Function to push a new leaf to the Merkle tree JSON file
function pushLeafToMerkleTree(address, creditScore, filePath) {
    let merkleTree = [];

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Read the existing Merkle tree JSON file
        merkleTree = JSON.parse(fs.readFileSync(filePath));
    }

    // Push the new leaf to the Merkle tree
    merkleTree.push({
        address: address,
        creditScore: creditScore
    });

    // Write the updated Merkle tree JSON back to the file
    fs.writeFileSync(filePath, JSON.stringify(merkleTree, null, 2));

    console.log('New leaf added to Merkle tree JSON:', {address, creditScore });
    console.log("new merkleTree.json:", merkleTree)
}

module.exports = {
    generateProverToml,
    generateZeroProverToml,
    generateRoot,
    createLeaf,
    pushLeafToMerkleTree
}