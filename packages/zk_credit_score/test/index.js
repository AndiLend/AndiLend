// import generateProverToml from '../src/merkleTree';

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


const testAddress = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
const testCreditScore = 800;

const proverToml = generateProverToml(testAddress, testCreditScore);
console.log(proverToml);

const zeroProverToml = generateZeroProverToml();
console.log("🚀 ~ zeroProverToml:", zeroProverToml)



import { exec } from 'child_process';

// Replace 'your command here' with the actual CLI command you want to execute
const command = 'cd nargo && nargo prove';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }


  console.log(`stdout: ${stdout}`);

});


    // Example usage
let address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
let creditScore = 800;

    let leaf = createLeaf(address, creditScore);
    console.log(leaf); // Output the merged leaf value


    // Example usage
    address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
    creditScore = 81;

    leaf = createLeaf(address, creditScore);
    console.log(leaf); // Output the merged leaf value



    // Example usage
    address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
    creditScore = 1;

    leaf = createLeaf(address, creditScore);
    console.log(leaf); // Output the merged leaf value




import fs from 'fs';

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

// Example usage
address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
creditScore = 800;
let filePath = "/workspace/merkleTree.json"

pushLeafToMerkleTree(address, creditScore, filePath);

address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
creditScore = 900;
filePath = "/workspace/merkleTree.json"

pushLeafToMerkleTree(address, creditScore, filePath);
pushLeafToMerkleTree(address, creditScore, filePath);