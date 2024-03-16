const bool1 = true
const bool2 = false 
const bool3 = !bool2 //true

let resultado = bool1 && bool2 
console.log("a. ", resultado) //false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)  //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado) //boolean