let ask = require("readline-sync")

let numerinhos = []

for(let i = 0; i <= 5; i++){
    numerinhos.push(Number(ask.question("Type a number: ")))
}
console.log(`O maior numero e: ${}`)