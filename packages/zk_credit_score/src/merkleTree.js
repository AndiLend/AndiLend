const fs = require("fs");

function generateProverToml(leafLeft, leafRight, cb) {
    // Construct the Prover.toml content
    const tomlContent = `[index]
value = "0"

[leafLeft]
value = "${leafLeft.leafValue}"

[leafRight]
value = "${leafRight.leafValue}"
`;

    return tomlContent;
}

function generateZeroProverToml(){
    const address ="0x0000000000000000000000000000000000000000";
    const creditScore = 0;
    return generateProverToml(address, creditScore)
}

async function generateRoot(leafLeft, leafRight){
    const proverContent = generateProverToml(leafLeft, leafRight);
    const p = new Promise((resolve, reject) => {
        fs.writeFileSync('nargo/Prover.toml', proverContent, function (err) {
            if (err) {
                console.error('Error writing to Prover.toml:', err);
                reject();
                return;
            }
            console.log('Prover.toml file written successfully.');
            resolve();    
        });
      });
    await p;
    const { stdout, stderr } = await exec('cd nargo && nargo prove');
    console.log("🚀 ~ generateRoot ~ stderr:", stderr)
    console.log("🚀 ~ generateRoot ~ stdout:", stdout)
    return stdout.trim();

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
function pushLeaf(address, creditScore, filePath) {
    let leafJson = [];

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Read the existing Merkle tree JSON file
        leafJson = JSON.parse(fs.readFileSync(filePath));
    }

    // Push the new leaf to the Merkle tree
    leafJson.push({
        address: address,
        creditScore: creditScore,
        leafValue: createLeaf(address, creditScore)
    });

    // Write the updated Merkle tree JSON back to the file
    fs.writeFileSync(filePath, JSON.stringify(leafJson, null, 2));

    console.log('New leaf added to Merkle tree JSON:', {address, creditScore });
    console.log("new leafJson.json:", leafJson)
}

// Function to calculate the smallest power of 2 greater than or equal to a given number
function nextPowerOfTwo(n) {
    let power = 2;
    while (power < n) {
        power *= 2;
    }
    return power;
}

const util = require('util');
const exec = util.promisify(require('child_process').exec);


// Function to calculate the Merkle root
async function calculateMerkleTreeAndRoot(leafsJson, merkleTreePath) {
     // Calculate the number of nodes required to make the tree complete
     const completeSize = nextPowerOfTwo(leafsJson.length);
     console.log("🚀 ~ calculateMerkleTreeAndRoot ~ completeSize:", completeSize)

     // If the number of nodes is not a power of 2, add empty leaf nodes
     const numEmptyLeaves = completeSize - leafsJson.length;
     console.log("🚀 ~ calculateMerkleTreeAndRoot ~ numEmptyLeaves:", numEmptyLeaves)
     for (let i = 0; i < numEmptyLeaves; i++) {
        leafsJson.push(createEmptyJsonLeaf());
     }

    let merkleTree = [leafsJson]
    console.log("🚀 ~ calculateMerkleTreeAndRoot ~ merkleTree:", merkleTree)

    // Helper function to recursively calculate the Merkle root
    async function recursiveHash(nodes) {
        console.log("🚀 ~ recursiveHash ~ nodes:", nodes)
        
        // Base case: If only one node is left, return its hash
        if (nodes.length === 1) {
            console.log("finishhh")
            let returnJson= {
                merkleTree,
                root:nodes[0].leafValue
            }
            fs.writeFileSync(merkleTreePath, JSON.stringify(returnJson, null, 2));
            console.log("🚀 ~ recursiveHash ~ returnJson:", returnJson)
            const hashPath = calculateHashPath(leafsJson.length -1 , merkleTree)
            console.log("🚀 ~ recursiveHash ~ hashPath:", hashPath)
            return returnJson
        }

        // Recursive case: Hash pairs of nodes and concatenate the hashes
        const newNodes = [];
        for (let i = 0; i < nodes.length; i += 2) {
            const left = nodes[i];
            const right = nodes[i + 1];
             // Execute the CLI command asynchronously and wait for the result
             const leafValue = await generateRoot(left, right);

            //  // Process the command output and update newNodes accordingly
            //  // This is just a placeholder, you should replace it with your logic
            //  const leafValue = stdout; // Assuming the output contains the leaf value

            // const leafValue = left.leafValue+right.leafValue
            newNodes.push({leafValue});
        }
        // Recur with the new set of nodes
        merkleTree.push(newNodes)
        return recursiveHash(newNodes);
    }

    // Start the recursion with the sorted Merkle tree data
    const recursiveReturn = await recursiveHash(leafsJson).leafValue;
    console.log("root:", recursiveReturn)
    return recursiveReturn;
}

function calculateHashPath(leafIndex, merkleTree) {
    console.log("🚀 ~ calculateHashPath ~ merkleTree:", merkleTree)
    console.log("🚀 ~ calculateHashPath ~ leafIndex:", leafIndex)
    const hashPath = [];

    // Start from the bottom layer (leaves)
    let layerIndex = 0;
    let currentIndex = leafIndex;

    // Iterate through the layers until we reach the root
    while (layerIndex < merkleTree.length - 1) {
        const currentLayer = merkleTree[layerIndex];
        const currentSiblingIndex = (currentIndex % 2 === 0) ? currentIndex + 1 : currentIndex - 1;
        const siblingLeaf = currentLayer[currentSiblingIndex];
        console.log("🚀 ~ calculateHashPath ~ siblingLeaf:", siblingLeaf)

        // Add the sibling's leafValue to the hash path
        hashPath.push(siblingLeaf.leafValue);

        // Move to the parent layer
        currentIndex = Math.floor(currentIndex / 2);
        layerIndex++;
    }

    return hashPath;
}


module.exports = {
    generateProverToml,
    generateZeroProverToml,
    generateRoot,
    createLeaf,
    pushLeaf,
    createEmptyLeaf,
    calculateMerkleTreeAndRoot
}