use dep::std::ecdsa_secp256k1::verify_signature;
use dep::std;
use dep::std::scalar_mul;
use dep::std::hash;
use dep::ecrecover;


fn split_address_credit_score(
    leaf_array: [u8; 65]
) -> ([u8; 24], [u8; 40]) {
    let mut credit_score: [u8; 24] = [0; 24];
    let mut address: [u8; 40] = [0; 40];

    for i in 0..24 {
        credit_score[i] = leaf_array[i + 1]; 
    }

    for i in 0..40 {
        address[i] = leaf_array[i + 25]; // Skip "0x" prefix and credit score
    }


    // for i in 0..25 {
    //     credit_score[i] = leaf_array[i + 1];
    // };

    // for i in 25..64 {
    //     address[i] = leaf_array[i + 1];
    // };
    (credit_score, address)
}

fn get_number_from_utf8_code(code: u8) -> u8 {
    // assert(code >= 48 & code <= 57);
    code - 48
}


fn main(
  index: Field,
  leaf: Field,
  root: pub Field,
//   pub_key_x: [u8; 32],
//   pub_key_y: [u8; 32],
  qualification: pub Field,
  hash_path: [Field; 3]
) {

    // std::println(index);
    // std::println(leaf);
    // std::println(root);

    // let mut leaf_array: [u8; 64] = [0; 64];
    // for i in 0..64 {
    //     leaf_array[i] = leaf_bytes[i]; 
    // }
    // std::println(leaf_array);


    std::println(leaf);
    let leaf_bytes = leaf.to_be_bytes(64);
    let mut credit_score_bytes: [u8; 3] = [0; 3];
    let mut address_bytes: [u8; 64] = [0; 64];

    for i in 0..20 {
        address_bytes[63 -i ] = leaf_bytes[leaf_bytes.len() -1 - i];
    }
    for i in 0..3 {
        credit_score_bytes[2 - i] = leaf_bytes[leaf_bytes.len() -21 - i];
    }
    let address_recovered = ecrecover::secp256k1::PubKey::from_unified(address_bytes);

    std::println(credit_score_bytes);
    std::println(address_bytes);
    std::println(address_recovered);
    std::println(address_recovered.to_eth_address());

    let credit_score: u32 = 900;
    let expected_qualification = if credit_score >= 800 {
        2
    } else if credit_score >= 500 {
        1
    } else {
        0
    };
    assert (expected_qualification == qualification);

    // TODO: this wont work because the address_byte is supposed to be a 64 bytes address
    // and we have a 20bytes address into a 64 bytes array....


    // // let number: u32 = u32::from_be_bytes( credit_score_bytes);
    // let first_CS_digit = get_number_from_utf8_code(credit_score_bytes[0]);
    // let second_CS_digit = get_number_from_utf8_code(credit_score_bytes[1]);
    // let third_CS_digit = get_number_from_utf8_code(credit_score_bytes[2]);
    // let credit_score_number: u32 = first_CS_digit as u32 * 100 + second_CS_digit as u32 *10 + third_CS_digit as u32;

    // std::println(credit_score_number);
    
    // ler number: u64 = credit_score_bytes as u64;

    // std::println(number);
    // let public_address = ecrecover::secp256k1::PubKey::from_unified(address_bytes);
    // std::println(public_address.to_be_bytes(64));
    // public_address.to_be_bytes(64);
    // assert (address_recovered == public_address);



    // // let leaf_array = leaf.to_le_bytes(64);
    // let (_credit_score, _address) = split_address_credit_score(leaf_bytes);
    

    // Check if the leaf is part of the merkle tree
    let computedRoot = std::merkle::compute_merkle_root(leaf, index, hash_path);

    assert (root == computedRoot);
}

// let given_key = ecrecover::secp256k1::PubKey::from_xy(pub_key_x, pub_key_y);
    // let _given_address = given_key.to_eth_address();
    // Convert the leaf Field to a hexadecimal string
    //let leaf_hex = leaf.to_hex();

    // let leaf_array = leaf.to_le_bytes(64);
    // let leaf_array_sl = leaf_array.as_slice();
    // let (_credit_score, _address) = split_address_credit_score(leaf_array_sl);
    // // address_field = ecrecover::secp256k1::PubKey::from_unified(address);
    // assert (given_address == address);
    // // let last_5_elements = leaf_array_sl(leaf_array_sl.len() - 5..);
    // let address = leaf_array_sl[40..64];
    //  let first = leaf_array[0];
    // let second = leaf_array[1];   // // Extract the address from the leaf value
    // // let address = leaf_array[24..];

    // let deded = pub_key_y.[3..]

    // let leaf_as_field = leaf.map(|x : u8| x as Field);

    // let last_40_elements = &leaf[24..];

    // let address_hex = leaf.26..64; // Address starts from character 26 to the end

    // // Extract the credit score from the leaf value
    // let credit_score_hex = leaf[2 ; 26]; // Credit score occupies characters 2 to 25

    // // Convert the address from hexadecimal to a string
    // let address = hex::decode(address_hex).unwrap();
    // let address_str = String::from_utf8(address).unwrap();

    // // Convert the credit score from hexadecimal to an integer
    // let credit_score = u64::from_str_radix(credit_score_hex, 16).unwrap();
    
    // First let's check that the calification is true
    

    // // assert (expected_qualification == qualification);
    