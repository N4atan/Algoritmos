//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function AA(n1, n2){
    let soma = n1 + n2
    return soma
}
//Uso
let v1 = 29
let v2 = 12
const soma = AA(v1, v2)
console.log(`A soma dos numeros ${v1} e ${v2} é ${soma}`)



//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
function maiorIgual(n1, n2){
    const compara = n1 >= n2
    return compara
}
//Uso
console.log(maiorIgual(2, 0)) 



//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function parImpar (n1){
    return (n1 % 2) === 0
}
//Uso, modifique o numero que queres saber.
if (parImpar(3)){
    console.log(`É par`)
} else {
    console.log(`é IMPAR`)
}



//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function foda(palavra){
    const tamanho = palavra.length
    const ALTA = palavra.toUpperCase()

    console.log(`Palavra escolhida foi ${palavra}, tem o total de ${tamanho} letras, e em maiscula ficaria ${ALTA}.`)
}
//Uso
foda("Luan gameplayes")



