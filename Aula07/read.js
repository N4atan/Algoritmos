//Instalar readline , nao readline-sync (são diferentes)
let readline = require('readline')

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Solicitando ao usuário que insira sua idade
rl.question("Qual sua idade?", (idade)=>{ //esse => não é maior ou igual
    //Exibindo idade do usuário
    console.log("Sua idade È:", idade)

    //Fechando a interface de leitura
    rl.close()
})
//Podemos copiar e colar, alterando perg, var, oq diz "console"