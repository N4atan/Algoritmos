let readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("Me diga um number:", (firstNumb) => { 
    rl.question("Me diga outro num:", (secNumb) => {
    console.log(Number(firstNumb) + Number(secNumb))
    rl.close()
    })
})