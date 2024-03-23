let ask = require('readline-sync')

let cliente = ask.question('Qual seu nome ?')
let tipoGame = ask.question('Temos Internacional ou Domestico. Digite IN para INTERNACIONAL ou DO para DOMESTICO:', )
let etapaGame = ask.question('SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final:', )
let quantidade = Number(ask.question('Quantos voce ingressos voce quer ?'))
let categoria = Number(ask.question('Assentos na 1, 2, 3 ou 4 fileira ?' ))

let valorIngresso = 0
switch (etapaGame){
    case "FI":
        switch (categoria){
            case 1:
                valorIngresso = 1980
                break
            case 2: 
                valorIngresso = 1320
                break
            case 3:
                valorIngresso = 880
                break
            case 4:
                valorIngresso = 330
                break
        }
        break
    case "SF":
        switch (categoria){
            case 1:
                valorIngresso = 1320
                break
            case 2:
                valorIngresso = 880
                break
            case 3:
                valorIngresso = 550
                break
            case 4:
                valorIngresso = 220
                break
        }
        break
    case "DT":
        switch (categoria){
            case 1:
                valorIngresso = 660
                break
            case 2: 
                valorIngresso = 440
                break
            case 3:
                valorIngresso = 330
                break
            case 4:
                valorIngresso = 170
                break
    }
    break
}

if (tipoGame === "IN"){
    valorIngresso = valorIngresso * 4.10
}

let valorTotal = valorIngresso * quantidade

console.log(" ----------Dados da Compra----------")
console.log("Nome:", cliente)
console.log("Tipo de jogo escolhido:", tipoGame)
console.log("Etapa do jogo escolhida:", etapaGame)
console.log("A fileira escolhida foi a ", categoria)
console.log("E o valor total deu", valorTotal)
console.log(valorIngresso,quantidade,valorTotal)