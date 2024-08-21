const { Keypair } = require("@solana/web3.js");
const nacl = require("tweetnacl");
const { generateMnemonic, mnemonicToSeedSync } = require("bip39");
const { derivePath } =require ("ed25519-hd-key");


const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic);
for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}