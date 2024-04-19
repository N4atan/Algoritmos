let dadesUser = {
    Name: "Natan"    ,
    Years: 17    ,
    GenerMusic: "Nenhum específico"    ,
    FavoriteMusic: "nenhuma como favorita"   ,
}

function novoObjeto(objeto){
    const  melhorAmigo = {
        ...objeto    ,
        favoriteFoods: ["Pizza", "Pancake", "Milho"]   ,
        melhorAmigoo:  {
            nome: "Lindsey"   ,
            idade: 17   
        }
    }
    console.log(`O nome da pessoa eh ${melhorAmigo.Name} e suas comidads preferidas sao ${melhorAmigo.favoriteFoods[0]}, ${melhorAmigo.favoriteFoods[1]} e ${melhorAmigo.favoriteFoods[2]} . Seu melhor amigo se chama ${melhorAmigo.melhorAmigoo.nome} e tem ${melhorAmigo.melhorAmigoo.idade} anos`)
}

novoObjeto(dadesUser)