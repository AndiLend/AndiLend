const {
    generateProverToml,
    generateZeroProverToml,
    generateRoot,
    createLeaf,
    pushLeafToMerkleTree,
    createEmptyLeaf,
    calculateMerkleRoot
} = require('../src/merkleTree');
const { exec } = require ('child_process');
const fs = require('fs');


// const testAddress = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
// const testCreditScore = 800;
// const proverToml = generateProverToml(testAddress, testCreditScore);

// console.log(proverToml);
// const zeroProverToml = generateZeroProverToml();
// console.log("🚀 ~ zeroProverToml:", zeroProverToml)




// // Replace 'your command here' with the actual CLI command you want to execute
// const command = 'cd nargo && nargo prove';

// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`stderr: ${stderr}`);
//     return;
//   }


//   console.log(`stdout: ${stdout}`);

// });


//     // Example usage
// let address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
// let creditScore = 800;

// let leaf = createLeaf(address, creditScore);
// console.log(leaf); // Output the merged leaf value


// // Example usage
// address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
// creditScore = 81;

// leaf = createLeaf(address, creditScore);
// console.log(leaf); // Output the merged leaf value



// // Example usage
// address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
// creditScore = 1;

// leaf = createLeaf(address, creditScore);
// console.log(leaf); // Output the merged leaf value

// Example usage

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
creditScore = getRandomNumber(0, 1000);;
let filePath = "/workspace/merkleTree.json"

pushLeafToMerkleTree(address, creditScore, filePath);

address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
creditScore = getRandomNumber(0, 1000);;
filePath = "/workspace/merkleTree.json"

// pushLeafToMerkleTree(address, creditScore, filePath);
// pushLeafToMerkleTree(address, creditScore, filePath);


// Function to push a new leaf to the Merkle tree JSON file
async function calculate(filePath) {
    let merkleTree = [];

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Read the existing Merkle tree JSON file
        merkleTree = JSON.parse(fs.readFileSync(filePath));
    }

    const myRoot = await calculateMerkleRoot(merkleTree);
    console.log("🚀 ~ calculate ~ myRoot:", myRoot)
    
}

calculate(filePath).then(result => {
    console.log("result: ", result)
});