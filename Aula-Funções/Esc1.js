function semPar(){
    console.log("Eu sou Natan, tenho 17 anos, moro em São Leopoldo e sou estudante.")
}

//nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function comPar(name, years, city, job){
    console.log(`Eu sou ${name}, tenho ${years} anos, moro em ${city} e sou ${job}`)
}

semPar()
comPar("Natan", 17, "Centro, Sao Leopoldo", "estagiario")