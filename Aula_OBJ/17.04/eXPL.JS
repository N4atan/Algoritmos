//Exemplo de objeto
const professor = {
    nome: `Natan`, //1 propriedade (tem que separar por virgula)
    idade: 17, //2 propriedade
    tarefas: [`Dar aula`, `Corrigir provas`],
    piada: function(){
        console.log(`Tsunami estava vindo e gritei pro cego olhar por onde anda ksksdkajfkajksjfaojsangpoangóanga`)
    }

}

//acessar propriedades, notaçao do ponto
console.log(professor.nome)
console.log(professor.tarefas)
professor.piada()

//notaçao de colchetes  *necessita ser string
console.log(professor["idade"])

//alteração de valores.
    //Primeiros acessamos acessamos e depois trocamos
professor.nome = "Gabriel"
professor["idade"] = 18

console.log(professor.nome)
console.log(professor.idade)


//obj dentro obj
const donoDoPet = {
    nome: "Natan"   ,
    pet:    {
        nomeDoPet: "jOjO"  ,
        rascsa: "Labrador misturado com pug"  ,
        idade:  2 
    }
}
console.log(donoDoPet.pet.nomeDoPet)

//acessando indice
const cursoFrontEnd = {
    nome: 'Linguagens FrontEnd' ,
    linguagens: ['JS', 'CSS', 'HTML']
}

console.log(cursoFrontEnd.linguagens[1]) 

//Acessando propriedades de um objeto dentro de um array
const professoresArray = [
    {nome: "Andrei", modulo: 1} ,
    {nome: "Vitor", modulo: 2}  ,
    {nome: "Mina", modulo: 3}   ,
]
console.log(professoresArray[1].nome)