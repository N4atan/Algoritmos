const ask = require("readline-sync")

let frase = ask.question(`Escreva uma frase que obrigatoriamente contem a letra O: `)



    if (frase.includes("o") || frase.includes('O')){ //Se a frase incluir a letra O ou o
        console.log(`-----------------------------------------`)
        console.log(frase.toUpperCase()) //DEIXA EM MAISCULA
        console.log(frase.replaceAll("o", "i")) // troca o por i
        console.log(`Sua frase contem ${frase.length} letras`) //conta quantidade de letras
        console.log(`-----------------------------------------`)       
    } else {
        console.log(`Animal, nao tem "O"`)
    }


