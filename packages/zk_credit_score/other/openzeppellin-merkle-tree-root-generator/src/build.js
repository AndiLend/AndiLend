import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

// (1)
const values = [
  ["0xcb6925B5ee0Ab66Ea86aD7677a83ec8fB99CdA03", "1234567890", "800"],
  ["0xa6ee564b54069cfe1375dc17cf05096b5a94b575", "0987654321", "200"],
  ["0xcb6925B5ee0Ab66Ea86aD7677a83ec8fB99CdA03", "1234567890", "1"],
  ["0xcb6925B5ee0Ab66Ea86aD7677a83ec8fB99CdA03", "1234567890", "2"],
  ["0xcb6925B5ee0Ab66Ea86aD7677a83ec8fB99CdA03", "1234567890", "3"],
  ["0xcb6925B5ee0Ab66Ea86aD7677a83ec8fB99CdA03", "1234567890", "4"],
  ["0xcb6925B5ee0Ab66Ea86aD7677a83ec8fB99CdA03", "1234567890", "5"],
  ["0xcb6925B5ee0Ab66Ea86aD7677a83ec8fB99CdA03", "1234567890", "6"]
];

// (2)
const tree = StandardMerkleTree.of(values, ["address", "uint256", "uint256"]);

// (3)
console.log('Merkle Root:', tree.root);

// (4)
fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));