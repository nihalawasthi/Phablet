# Phablet Encryption Algorithm Documentation

## Overview:
The `phablet()` algorithm is a multi-layered encryption process designed to secure plaintext data. It follows several steps, applying various encryption techniques, including substitution-permutation networks (SPNs), Feistel Networks, bitwise operations, and custom block ciphers.

## Algorithm Steps:

### Step 1: Initialization and Initial Round

#### Purpose:
- Setups initial keys and parameters.
- Processes plaintext in 4-byte blocks using key-based XOR operations.

#### Steps:
1. **Initialization:** Sets up initial keys and parameters.
2. **Key Padding:** Ensures the provided key is of the required length (16 characters) and raises an error if the key length is incorrect.
3. **Initial Round:** Processes the plaintext in 4-byte blocks.
   - Divides the plaintext into blocks of 4 characters.
   - Performs XOR, addition modulo 256, and key manipulation operations on the blocks using a derived key.
   - Handles padding for the last block if needed.

### Step 2: First Encryption Layer (`encryption_1`)
1. **Process**: Applies basic substitution and addition operations to the plaintext using `key1`.
2. **Conversion**: Converts the resulting encrypted text into a hexadecimal representation.

### Step 3: Second Encryption Layer (`encryption_2`)
1. **Feistel Network**: Utilizes a Feistel Network-based encryption technique with a predefined key (`key2`).
2. **Substitution-Permutation Network (SPN)**: Involves S-boxes (`S0` and `S1`), a permutation box (`P`), and bitwise operations for encryption.

### Step 4: Third Encryption Layer (`encryption_3`)
1. **Key Expansion**: Generates round keys from a provided key (`key3`) for a specific number of rounds.
2. **S-Box and Permutation Operations**: Executes S-box operations and a permutation based on a predefined table (`Permutation`).

### Step 5: Fourth Encryption Layer (`encryption_4`)
1. **Data Conversion and Padding**: Converts data into binary format, performs necessary padding, and verifies input size.
2. **Data Encryption**: Utilizes a custom block cipher and a user-provided key (`key5`) for encryption.

### Step 6: Fifth Encryption Layer (`encryption_5`)
1. **Data Conversion and Key Operations**: Processes data into chunks, applies bitwise rotation, and performs addition operations using a provided key.
2. **Output Formation**: Aggregates encrypted chunks into a final encrypted output.

### Step 7: Sixth Encryption Layer (`encryption_6`)
#### Purpose:
- Executes a final encryption operation using the RSA encryption scheme.

#### Steps:
1. **Primefiller Function:** Performs an undisclosed function related to prime numbers or primality testing.
2. **Final Encryption (RSA):** Utilizes modular exponentiation (using `pow`) to encrypt the data.
   - Encrypts the data using the RSA encryption scheme with the provided modulus `n` and exponent `key6`.

## Key Observations:
- **Multilayered Approach**: The algorithm employs multiple layers of encryption techniques, enhancing data security.
- **Custom Operations**: Utilizes custom block ciphers, bitwise manipulations, and predefined tables for encryption.
- **Key Management**: Uses a combination of fixed keys and user-provided keys for different encryption stages.
- **Data Formatting**: Involves data conversion between ASCII, hexadecimal, binary formats, and byte-level operations.

## Conclusion:
The `phablet()` encryption algorithm applies a multi-stage process involving diverse cryptographic techniques to secure plaintext data. Each step performs distinct operations contributing to a complex encryption mechanism. However, the effectiveness and security of this algorithm depend on the strength of the employed techniques and the keys used in each stage.
