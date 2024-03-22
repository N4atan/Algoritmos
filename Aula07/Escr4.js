//Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que mostre qual o gênero de filme que vão assistir e o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme"

let categoryFilm = "Fantasia"
let preçoIngresso

switch (categoryFilm){
    case 'Drama':
        preçoIngresso = 7
        break
    case 'Fantasia':
        preçoIngresso = 15
        break
    case 'Ação':
        preçoIngresso = 12.99
        break
    default:
        console.log("Escolha um genero: Fasntasia, Ação e Drama")
        break
}

console.log("Voces escolheram", categoryFilm, "e os ingressos cada é", preçoIngresso,"reais.")
if (categoryFilm === 'Fantasia' && preçoIngresso <= 15){
    console.log("Bom filme")
} else {
    console.log("Escolha outro filme")
}