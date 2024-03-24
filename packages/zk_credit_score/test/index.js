const {
    generateProverToml,
    generateZeroProverToml,
    generateRoot,
    createLeaf,
    pushLeaf,
    createEmptyLeaf,
    calculateMerkleTreeAndRoot
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


address = "0x0000000000000000000000000000000000000000";
creditScore = 0;//getRandomNumber(0, 1000);;
let filePath = "/workspace/leafs.json"

pushLeaf(address, creditScore, filePath);

// address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
// creditScore = getRandomNumber(0, 1000);;
// filePath = "/workspace/merkleTree.json"

// pushLeaf(address, creditScore, filePath);
// pushLeaf(address, creditScore, filePath);


// Function to push a new leaf to the Merkle tree JSON file
async function calculateRoot(filePath) {
    let leafs = [];

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Read the existing Merkle tree JSON file
        leafs = JSON.parse(fs.readFileSync(filePath));
    }
    let merkleTreePath = "/workspace/merkleTree.json"

    const myRoot = await calculateMerkleTreeAndRoot(leafs, merkleTreePath);
    console.log("🚀 ~ calculateRoot ~ myRoot:", myRoot)
    
}

calculateRoot(filePath).then(result => {
    console.log("result: ", result)
});