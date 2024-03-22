//Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um variaveis para receber a idade do usuário.

//b) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

let nameUser = "Natan"
let yearsUser = 19
let yearMin = yearsUser >= 18

if (yearMin === true){
    console.log("Voce pode dirigir")
} else {
    console.log("Voce nao pode dirigir")
}