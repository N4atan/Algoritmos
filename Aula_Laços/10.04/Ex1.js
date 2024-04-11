const ask = require("readline-sync")

//usando array
let parar = 0
let number = []

while (parar === 0){
  number.push(Number(ask.question("Type one number: ")))

  if (number.includes(0)){
    const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(`A soma de todos é: ${sum}`)

    parar = 1
  }
}


//ou sem usar array
let soma = 0
while(true){
    let input = Number(ask.question("Type a number: "))
    
    if (input === 0){
        console.log(`O resultado da soma é: ${soma}`)
        break
    }

    soma += input   
}

//ou mais simples até:
let input
let soma2 = 0

while (input !== 0){
    input = Number(ask.question("Type a number: "))
    soma2 += input
}
console.log(soma2)




