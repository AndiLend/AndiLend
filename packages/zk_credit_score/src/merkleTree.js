export function generateProverToml(address, creditScore) {
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

// module.exports = {
//     generateProverToml
// }