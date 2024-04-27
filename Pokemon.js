const ask = require('readline-sync')

let treinador1 = [] //nome, tipo, hp, ataque, defesa
let treinador2 = []
let nameTreinador1 = ''
let nameTreinador2 = ''



//1. Cadastrar pokemons
function registerPokemonTreinador(array){ //Aqui deixei como array porq posso chamar a mesma função pros dois treinadores
    console.clear()
    let namePokemon = ask.question('Qual o nome do Pokemon? \nR:')
    let typePoke = ask.question('Qual o tipo dele? \nR:')
    let hp = Number(ask.question('Qual o hp dele? \nR:'))
    let ataque = Number(ask.question('Quanto de ataque fisico ele tem? \nR:'))
    let defense = Number(ask.question('Quanto de defesa fisica ele tem? \nR:'))

    let pokemonOBJ = {
        namePoke: namePokemon ,
        typePoke,
        hp,
        ataque,
        defense
    }

    array.push(pokemonOBJ)
    console.log(`Parabens!\tO Pokemon ${pokemonOBJ.namePoke} foi adicionado a sua equipe!`)
    console.log(array)
    ask.question('Aperte enter para voltar ao menu... ')
    
}

//Listar Pokemon
function listarPokemons(){
    console.clear()

    console.log(`Equipe do Treinador: ${nameTreinador1}`)
    if(treinador1.length > 0){
         for(let i =0; i < 6; i++){
            let pokemonDoTreinador1 = treinador1[i]

            console.log(pokemonDoTreinador1.namePoke)
        }
    }   else {console.log('NAO HA NENHUM POKEMON CADASTRADO')}
    //---------------------------------------------------------
    console.log(`\nEquipe do Treinador: ${nameTreinador2}`)
    if(treinador2.length > 0){
         for(let i =0; i < 6; i++){
           
            console.log(`${treinador2[i].namePoke}`)
        }
    }   else {console.log('NAO HA NENHUM POKEMON CADASTRADO')}

    ask.question('\nAperte enter para voltar ao menu...')
}

//Menu FOFO
function menuApp(){
    console.clear()
    nameTreinador1 = ask.question('Qual o nome do primeiro treinador? \nR:').toUpperCase()
    nameTreinador2 = ask.question('Qual o nome do segundo treinador? \nR:').toUpperCase()
    console.clear()

    while(menuAppFun){
        console.clear()
        console.log('------------------BEM VINDOS TREINADORES------------------')
        console.log('1. CADASTRAR POKEMON')
        console.log('2. MOSTRAR EQUIPES')
        console.log('3. INICIAR BATALHA')
        console.log('4. SAIR')
        console.log('----------------------------------------------------------')
        let menuUser = Number(ask.question('\nQual voce deseja?\nR:'))

        switch (menuUser){
            case 1:
                console.clear()

                console.log(`PARA QUAL EQUIPE DESEJA CADASTRAR:\n1-Treinador ${nameTreinador1}\nOU\n2-Treinador ${nameTreinador2}`)

                let escolhaTreinadorParaCadastrar = Number(ask.question(`\n\nDIGITE O NUMERO RESPECTIVO. \nR:`))

                if (escolhaTreinadorParaCadastrar === 1){registerPokemonTreinador(treinador1)} else if (escolhaTreinadorParaCadastrar === 2){registerPokemonTreinador(treinador2)} else{break}
                break

            case 2:
                listarPokemons()
                break

            case 3:
                break

            case 4:
                menuAppFun = false
                console.clear()
                break
        }
    }
}

let menuAppFun = true
menuApp()
