const ask = require("readline-sync")

// let pokemon = [ask.question(`Digas uno pokémon: `), ask.question(`Digas outro: `)]

const pokemon = []



function digasPokemon(){
    let iterador = 0
    while (iterador < 3){
        pokemon.push(ask.question(`Digas uno pukemon? `))
        iterador++
    }
}

digasPokemon()

if (ask.question(`Quer continuar? y/n`) !== "n"){
    digasPokemon()
}   
