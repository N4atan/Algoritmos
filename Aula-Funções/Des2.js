//Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. hip² = a² + b²

function teoPit(CA, CO){
    let hip = Math.sqrt((CA*CA) + (CO*CO))  //Esse math.sqrt achei na internet, ele realiza a raiz quadrada
    return hip
}

console.log(`${teoPit(20,21)}`) //TEM QUE DAR 29
