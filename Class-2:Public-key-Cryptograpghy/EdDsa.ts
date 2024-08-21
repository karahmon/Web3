const { Keypair } = require("@solana/web3.js");
const nacl = require("tweetnacl");

const keypair = Keypair.generate();

const publicKey = keypair.publicKey.toBase58();
const secretKey = keypair.secretKey;


console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);

const message = new TextEncoder().encode("hello world");

const signature = nacl.sign.detached(message, secretKey);
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes(),
);

console.log(result);