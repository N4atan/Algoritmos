function mediaNotas(nota1, nota2, nota3){
    console.log("Sua média é", (nota1+nota2+nota3) / 3)
}

mediaNotas(10, 7.5, 8)

//Template String
function mediaNotas2(n1, n2,n3){
    console.log(`Sua média é ${(n1 + n2 + n3) / 3 } `)
}



function mediaNotas2(n1, n2,n3){
    let media = (n1 + n2 + n3) / 3 
    console.log(`Sua média é ${media.toFixed(2)} `) //Aparecra somente 2 num apos virgula
}


