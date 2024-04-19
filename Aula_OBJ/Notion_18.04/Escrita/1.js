//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
//const pessoa = {
 // nome: "Vitor Hugo", 
 //   apelidos: ["Vitinho", "Vitão", "Vit"]
 //}
 
 // Exemplo de saída
 //"Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

let objNatan = {
    Nome: "Natan"   ,
    apelidos: ["Neitan", "Kng", "Gabriel"]
}

function juntarApelidos(objeto){
    let phrase = "Eu sou Vitor, mas pode me chamar de:" 
    for (let i = 0; i < objeto.apelidos.length; i++) {
        if (objeto.apelidos.length -2 === i) {
            phrase += `, ${objeto.apelidos[i]} ou`
        } else {
            phrase += ' ' + objeto.apelidos[i]
        }
    }
    console.log(phrase)
}
juntarApelidos(objNatan)