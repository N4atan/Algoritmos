let ask = require("readline-sync")

let name = ask.question("Qual seu nome?")
let year = Number(ask.question("Qual sua idade?"))
let atualYear = Number(ask.question("Em qual ano você esta?"))
let futureYears = 2055 - atualYear
let yearborn = atualYear - year

console.log("Olá", name+".", "Voce é maior de idade?", (year >= 18) + "." )
console.log("Você nasceu no ano de", yearborn+".", "Em 2055, você terá", futureYears, "anos")
