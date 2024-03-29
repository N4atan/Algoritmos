//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores passados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

function soma(n1, n2){
    return n1 + n2
}
function subtração(n1, n2){
    return n1 - n2
}
function multip(n1, n2){
    return n1 * n2
}
function div(n1, n2){
    return n1 / n2
}

let escolhaNum = 10
let escolhaNum2 = 20

console.log(`A soma dos numeros ${escolhaNum} e ${escolhaNum2} é: ${soma(escolhaNum, escolhaNum2)}.`)
console.log(`A subtracao dos numeros ${escolhaNum} e ${escolhaNum2} é: ${subtração(escolhaNum, escolhaNum2)}.`)
console.log(`A multiplicacao dos numeros ${escolhaNum} e ${escolhaNum2} é: ${multip(escolhaNum, escolhaNum2)}.`)
console.log(`A divisao dos numeros ${escolhaNum} e ${escolhaNum2} é: ${div(escolhaNum, escolhaNum2)}.`)