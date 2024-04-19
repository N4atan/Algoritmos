const ask = require("readline-sync")


let filmeTop = {
    nameFilm: 'Tenet' ,
    yearLançamento: 2020 ,
    director: 'Christopher Nolan' ,
    elenco: ["John David", "Robert Pattinson", "Elizabeth Debicki"],
    watch: new Boolean
}

assistido = ask.question(`Voce ja viu o filme: ${filmeTop.nameFilm} ? `)
assistido === 'sim'? filmeTop.watch = true : filmeTop.watch = false

console.log(`Nome do filme: ${filmeTop.nameFilm}`)
console.log(`Data de lancamento: ${filmeTop.yearLançamento}`)
console.log(`O diretor: ${filmeTop.director}`)
console.log(`Algumas pessoas do elenco: ${filmeTop.elenco}`)
console.log(`Ja foi assistido pelo usuario? ${filmeTop.watch} \n`)


//EX3
filmeTop.personagens = ['Protagonist', 'Neil', 'Kat']

for (let i = 0; i < filmeTop.elenco.length; i++){
console.log(`O ator ${filmeTop.elenco[i]}, interpretou o ${filmeTop.personagens[i]}`)
}


filmeTop.elenco[0] = "Xuxa"
console.log("\nDados do filme:", filmeTop)