BarretenbergBackend = require('@noir-lang/backend_barretenberg');
Noir = require('@noir-lang/noir_js');
circuit = require('../circuit/target/circuit.json');

const backend = new BarretenbergBackend(circuit);
const noir = new Noir(circuit, backend);

// get contract's merkleroot
// get the user leaf, index, proof

// user generates ZK proof that the provided leaf exist in this tree
