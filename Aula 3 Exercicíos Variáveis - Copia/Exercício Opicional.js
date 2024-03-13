//Instala  npm install readline-sync. Fiz com ajuda do Adrian

let ask = require('readline-sync')

let valor1 
let valor2 

valor1 = Number(ask.question('Diga-me um valor:')) //Aqui é feita a pergunta, e armazena a resposta, e defini como valor1
valor2 = Number(ask.question('Me diga um outro valor:')) //Esse number converte a resposta em número, pois por padrão vem string

console.log(`A soma dos valores é", ${valor1 + valor2}`)
console.log("A multiplicação entre elas é", valor1 * valor2)

