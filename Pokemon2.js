const ask = require('readline-sync')

const bancoDeDadosPokemon = [
    { id: 1, pokemon: { nome: "Pikachu", HP: 35, danoFisico: 55, defesa: 40, tipo: "Elétrico" } },
    { id: 2, pokemon: { nome: "Charmander", HP: 39, danoFisico: 52, defesa: 43, tipo: "Fogo" } },
    { id: 3, pokemon: { nome: "Squirtle", HP: 44, danoFisico: 48, defesa: 65, tipo: "Água" } },
    { id: 4, pokemon: { nome: "Bulbasaur", HP: 45, danoFisico: 49, defesa: 49, tipo: "Planta" } },
    { id: 5, pokemon: { nome: "Jigglypuff", HP: 115, danoFisico: 45, defesa: 20, tipo: "Normal" } },
    { id: 6, pokemon: { nome: "Meowth", HP: 40, danoFisico: 45, defesa: 35, tipo: "Normal" } },
    { id: 7, pokemon: { nome: "Psyduck", HP: 50, danoFisico: 52, defesa: 48, tipo: "Água" } },
    { id: 8, pokemon: { nome: "Machop", HP: 70, danoFisico: 80, defesa: 50, tipo: "Lutador" } },
    { id: 9, pokemon: { nome: "Geodude", HP: 40, danoFisico: 80, defesa: 100, tipo: "Pedra" } },
    { id: 10, pokemon: { nome: "Eevee", HP: 55, danoFisico: 55, defesa: 50, tipo: "Normal" } }
]

let timeTreinador1 = []
let timeBot = []

let varMenu = true

function listarPokemons(bancoDeDados){
    console.clear()

    console.log('ID', '|', 'NOME'.padEnd(23), 'TIPO'.padEnd(10))
    console.log('--', '|', '-'.padEnd(20, '-'), '|', '-'.padEnd(10, '-'))

    for(pokemon of bancoDeDados){
        console.log(`${pokemon.id.toString().padEnd(2)} | ${pokemon.pokemon.nome.padEnd(23)}${pokemon.pokemon.tipo.padEnd(10)}`)
    }

    ask.question('\n--> Aperte Enter para sair... ')
    
}

function montarEquipe(arraytreinador, arraybot){
    console.clear()
    console.log('MONTAR TIME PARA BATALHA')
    console.log('---------------------------')
    if(ask.question('System: Voce já olhou todos os pokemons registrados em nossa pokedex?\n Caso nao, irei lhe mostrar os pokemons que temos, por favor, anote os IDs dos pokemons que voce quer, pois utilizara eles para selecionar para o seu time.\nR: ') !== 'y'){
        listarPokemons(bancoDeDadosPokemon)
    }
    console.log('---------------------------')
    console.log('System: Bom, agora que voce ja olhou nossa pokedex, me diga quais voce quer?')
    for(let i = 0; i < 5; i++){
        let qualPlayerQuer = Number(ask.question('System: Qual o ID do pokemon que voce quer? \nR: ')) - 1
        let qualPlayerQuerBancoDeDados = bancoDeDadosPokemon[qualPlayerQuer]
        arraytreinador.push(qualPlayerQuerBancoDeDados)
        console.log(`O POKEMON ${arraytreinador[i].pokemon.nome} FOI ADICIONADO AO SEU TIME.`)
    }
    ask.question('Aperte ENTER para voltar... ')
}


function menuApp(){
    while(varMenu){
        console.clear()
        console.log('SISTEMA BETA BATALHA POKEMON')
        console.log('1. POKEDEX')
        console.log('2. MONTAR TIME')
        console.log('3. SAIR')

        let pergUserMenu = Number(ask.question('\n--> Qual opcao voce deseja? Digite apenas o numero! \nR: '))

        switch (pergUserMenu){
            case 1:
                listarPokemons(bancoDeDadosPokemon)
                break
            
            case 2:
                montarEquipe(timeTreinador1, timeBot)
                break    

            case 3:
                listarPokemons(timeTreinador1)
                break

            case 4:
                varMenu = false
                break
        }
        console.clear()
    }
}

menuApp()