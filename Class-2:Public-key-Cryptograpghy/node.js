let str ="h";
const binaryRepresentation = new TextEncoder().encode(str); //text encoder is a class, it encodes text into binary 
console.log(binaryRepresentation)

//Converting Array into Hex

function arrayToHex(byteArray){
    let hexString='';
    for(let i=0;i<byteArray.length;i++){
        hexString+= byteArray[i].toString(16).padStart(2,'0'); // to string(16) converts the array number to hexadecimal format possibly a string 
    }
    return hexString;
}

const byteArray = new Uint8Array([72,101,108,108,111]);
const hexString = arrayToHex(byteArray);
console.log(hexString);
