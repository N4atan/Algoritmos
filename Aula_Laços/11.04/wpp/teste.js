const ask = require("readline-sync")
//8
console.log(`---------------8.------------`)
let numberUser = []
let greater = 0
let littler = 0

for(let w = 0; w < 10; w++){
    numberUser.push(Number(ask.question("Me diga um numero: ")))
    if (numberUser[w] > greater ){
        greater = numberUser[w]
        littler = greater
        }
}
//nao posso deixar dentro do mesmo loop, se nao duplica o resultado depois
for(let w2 = 0; w2 < 10; w2++){
    if (numberUser[w2] < littler){
        littler = numberUser[w2]
    }
}
console.log(numberUser)
console.log(`o maior é ${greater}, o menor é ${littler}`)