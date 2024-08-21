//Encrypting Algorithm - SHA256
const crypto = require('crypto');
const input ="100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');
console.log(hash);

//What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

function findHashWithPrefix(prefix){
  let input =0;
  while(true){
    let inputStr = input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
    if(hash.startsWith(prefix)){
        return {input:inputStr,hashvalue:hash}
    }
    input++;
  }    
}
const result = findHashWithPrefix("00000")
console.log("Integer : "+ result.input);
console.log("Hash Value : "+ result.hashvalue);

//What if I ask you that the input string should start with a transaction message ? How would the code change?
function findHashWithPrefixStr(prefix){
    let input = 0;
    while(true){
     let inputStr = input.toString();
     let hash = crypto.createHash('sha256').update("harkirat => Raman | Rs 100"+"Ram => Ankit | Rs 10"+inputStr).digest('hex');
    if(hash.startsWith(prefix)){
        return {input: inputStr, hashvalue:hash}
    }
    input++;
    }
    
}
const result1 = findHashWithPrefixStr("00000")
console.log("Integer : "+ result1.input);
console.log("Hash Value : "+ result1.hashvalue);