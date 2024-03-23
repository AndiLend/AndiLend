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

const testAddress = "0x7a9f3B6e44C2e808d3Ff7a4e3e15C6c5e8D42ABC";
const testCreditScore = 800;

const proverToml = generateProverToml(testAddress, testCreditScore);
console.log(proverToml);

const zeroProverToml = generateZeroProverToml();
console.log("🚀 ~ zeroProverToml:", zeroProverToml)

