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

function createEmptyLeaf(){
    const address ="0x0000000000000000000000000000000000000000";
    const creditScore = 0;
    return createLeaf(address, creditScore);
}


function createEmptyJsonLeaf(){
    const address ="0x0000000000000000000000000000000000000000";
    const creditScore = 0;
    return {
        address: address,
        creditScore: creditScore,
        leafValue: createLeaf(address, creditScore)
    }
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
        creditScore: creditScore,
        leafValue: createLeaf(address, creditScore)
    });

    // Write the updated Merkle tree JSON back to the file
    fs.writeFileSync(filePath, JSON.stringify(merkleTree, null, 2));

    console.log('New leaf added to Merkle tree JSON:', {address, creditScore });
    console.log("new merkleTree.json:", merkleTree)
}

// Function to calculate the smallest power of 2 greater than or equal to a given number
function nextPowerOfTwo(n) {
    let power = 1;
    while (power < n) {
        power *= 2;
    }
    return power;
}


// Function to calculate the Merkle root
function calculateMerkleRoot(merkleTreeJson) {
     // Calculate the number of nodes required to make the tree complete
     const completeSize = nextPowerOfTwo(merkleTreeJson.length);

     // If the number of nodes is not a power of 2, add empty leaf nodes
     const numEmptyLeaves = completeSize - merkleTreeJson.length;
     for (let i = 0; i < numEmptyLeaves; i++) {
        merkleTreeJson.push(createEmptyJsonLeaf());
     }

    // Helper function to recursively calculate the Merkle root
    function recursiveHash(nodes) {
        console.log("🚀 ~ recursiveHash ~ nodes:", nodes)
        
        // Base case: If only one node is left, return its hash
        if (nodes.length === 1) {
            return nodes[0]
        }

        // Recursive case: Hash pairs of nodes and concatenate the hashes
        const newNodes = [];
        for (let i = 0; i < nodes.length; i += 2) {
            const left = nodes[i];
            const right = nodes[i + 1];
            const leafValue = left.leafValue+right.leafValue
            newNodes.push({leafValue});
        }

        
        // Recur with the new set of nodes
        return recursiveHash(newNodes);
    }

    // Start the recursion with the sorted Merkle tree data
    const recursiveReturn = recursiveHash(merkleTreeJson).leafValue;
    console.log("root:", recursiveReturn)
    return recursiveReturn;
}


module.exports = {
    generateProverToml,
    generateZeroProverToml,
    generateRoot,
    createLeaf,
    pushLeafToMerkleTree,
    createEmptyLeaf,
    calculateMerkleRoot
}