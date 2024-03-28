//Exemplo de function, se não chamar a function, ela nao executará!
//Os tais paramentros são var que usamos na function

function calculaArea(altura, largura) {
    const area = altura *largura
    console.log(area)
}
calculaArea(3,2) //Caso nao declarados os parametros, aparecera NaN

//Outro Exempl
function imprimirOlaMundo(){
    console.log("Olá mundo")
}
imprimirOlaMundo()