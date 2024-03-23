let readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Qual sua idade?", (idade)=>{ 
    if (idade >= 18){
        console.log("Voce é maior de idade :O")
    } else {
        console.log("Voce e menor de idade")
    }
    rl.close()
})