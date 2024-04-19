const ask = require("readline-sync")

let answerName = ask.question("What's your name? ")
let idade = Number(ask.question("Quantos anos voce tem? "))
let generoMusica = ask.question("Qual seu genero de musica favorita? ")
let musicaFavorita = ask.question("Qual sua musica favorita? ")

let dadesUser = {
    Name: answerName    ,
    Years: idade    ,
    GenerMusic: generoMusica    ,
    FavoriteMusic: musicaFavorita   ,
}

console.log(dadesUser.Name)
console.log(dadesUser.Years)
console.log(dadesUser.generoMusica)
console.log(dadesUser.FavoriteMusic)
