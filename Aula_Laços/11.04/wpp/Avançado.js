const ask = require("readline-sync")

//7
console.log(`---------------7.------------`)
for(let q = 1; q <= 100; q++){
    if (q % 3 === 0 && q % 5 === 0){
        console.log(`${q} FizzBuzz`)
    } else if (q % 3 === 0){
        console.log(`${q} Fizz`)
    } else if (q % 5 === 0){
        console.log(`${q} Buzz`)
    }
}

//8
//console.log(`---------------8.------------`)
//let greater = -Infinity //é infinito
//let littler = Infinity

//for (w = 0; w < 10; w++){
//    let answerUser = Number(ask.question("Type a number: "))
//    if (answerUser > greater){
//        greater = answerUser
//    }
//   if (answerUser < littler){
//        littler = answerUser
//    }
//}
//console.log(`O maior e: ${greater} e o menor:${littler}`)

//9
console.log(`---------------9.------------`)

function calcularFatorial(num) {
    let fatorial = 1;
    for (let i = 1; i <= num; i++) {
      fatorial *= i;
    }
    return fatorial;
}
  

console.log(calcularFatorial(5))