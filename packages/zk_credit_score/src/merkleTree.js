const fs = require("fs");
const { execSync } = require("child_process");

function generateProverToml(leafLeft, leafRight, cb) {
    // Construct the Prover.toml content
    const tomlContent = `index = "0"

leafLeft = "${leafLeft.leafValue}"

leafRight = "${leafRight.leafValue}"
`;

    return tomlContent;
}

function generateZeroProverToml(){
    const address ="0x0000000000000000000000000000000000000000";
    const creditScore = 0;
    return generateProverToml(address, creditScore)
}

async function writeToFileSync(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, function (err) {
            if (err) {
                console.error(`Error writing to ${filePath}.`, err);
                reject();
                return;
            }
    
            resolve();    
        });
      });
}

async function generateRoot(leafLeft, leafRight){
    const proverContent = generateProverToml(leafLeft, leafRight);
    await writeToFileSync('nargo_merkle_tree/Prover.toml', proverContent);
    
    let result;
    try {
        result = execSync('cd nargo_merkle_tree && nargo prove');
    } catch(e) {
        console.log('nargo prove error!!! ', e);
    }
    console.log('result => ', result);
    return result.toString().trim();
}

function createLeaf(address, creditScore) {
    // Remove '0x' prefix from the address
    const cleanAddress = address.slice(2);

    // Convert credit score to hexadecimal string and pad with zeros to make it 32 bytes
    const hexCreditScore = String(creditScore).padStart(24, '0');

    // Ensure that the address is exactly 40 characters long (20 bytes)
    const paddedAddress = cleanAddress.padEnd(40, '0');

    // Concatenate the padded address and padded credit score to form the leaf value
    const leafValue = `0x${hexCreditScore}${paddedAddress}`;

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
     const lastPushedIndex = leafsJson.length -1;
     console.log("🚀 ~ calculateMerkleTreeAndRoot ~ leafsJson:", leafsJson)
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
        
        // Base case: If only one node is left, return its hash
        if (nodes.length === 1) {

            let returnJson= {
                merkleTree,
                root:nodes[0].leafValue
            }
            fs.writeFileSync(merkleTreePath, JSON.stringify(returnJson, null, 2));

            const hashPath = calculateHashPath(lastPushedIndex , merkleTree)
            const circuitContent = getCircuitContent(hashPath, index, leaf, root);
            await writeToFileSync('circuit/Prover.toml', circuitContent);
            console.log("🚀 ~ recursiveHash ~ hashPath:", hashPath);

            fs.writeFileSync('/workspace/hashPath.json', JSON.stringify(hashPath, null, 2));
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
        console.log("🚀 ~ recursiveHash ~ newNodes:", newNodes)
        merkleTree.push(newNodes)
        return recursiveHash(newNodes);
    }

    // Start the recursion with the sorted Merkle tree data
    const recursiveReturn = await recursiveHash(leafsJson).leafValue;
    console.log("root:", recursiveReturn)
    return recursiveReturn;
}

function calculateHashPath(leafIndex, merkleTree) {
    const hashPath = [];

    // Start from the bottom layer (leaves)
    let layerIndex = 0;
    let currentIndex = leafIndex;
    console.log("🚀 ~ calculateHashPath ~ currentIndex:", currentIndex)

    // Iterate through the layers until we reach the root
    while (layerIndex < merkleTree.length - 1) {
        const currentLayer = merkleTree[layerIndex];
        console.log("🚀 ~ calculateHashPath ~ currentLayer:", currentLayer)
        const currentSiblingIndex = (currentIndex % 2 === 0) ? currentIndex + 1 : currentIndex - 1;
        console.log("🚀 ~ calculateHashPath ~ currentSiblingIndex:", currentSiblingIndex)
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