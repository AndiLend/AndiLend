const express = require('express');
const fs = require('fs');
const { calculateMerkleTreeAndRoot, pushLeaf } = require('./src/merkleTree.js');
const app = express();
const PORT = process.env.PORT || 3000;
const leafsFilePath = "/workspace/leafs.json"
const merkleTreePath = "/workspace/merkleTree.json"

function externalServiceCreditScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define the 'getCreditScore' endpoint
app.get('/getCreditScore', async (req, res) => {
    const { ethAddress, dni } = req.query;

    // const creditScore = getCreditScoreFromDatabase(ethAddress, dni);
    const creditScore = externalServiceCreditScore(0, 1000);
    console.log({ethAddress, dni, creditScore});
    pushLeaf(ethAddress, creditScore, leafsFilePath);
    const root = await calculateRoot(leafsFilePath);
    console.log('proof => = ' + root[1]);

    res.json({ ethAddress, dni, creditScore });
});

// address = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";


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

  const myRoot = await calculateMerkleTreeAndRoot(leafs, merkleTreePath);
  console.log("🚀 ~ calculateRoot ~ myRoot:", myRoot)
  return myRoot;
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
