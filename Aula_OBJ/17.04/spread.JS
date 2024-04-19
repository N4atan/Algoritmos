//criando copia de propriedade
const usuario = {
    nome: 'Prof'    ,
    idade: 25   ,
    email: 'ssenac@gmail.com'   ,
    cidade: 'Sao Leop'
}

const novoUsuario = {
    ...usuario  ,
    nome: 'João'    ,
    idade: 28
    //posso add novas propriedades também
}

console.log(novoUsuario)
