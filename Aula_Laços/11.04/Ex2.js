let maior = 0
let number = [11, 15, 18, 14, 12, 13]

function greatter(){
    for(let i = 0; i < number.length; i++){ //se o i for menor que o numero de elementos na array => true
        if(number[i] > maior){ //se o indice i (vai se alterando) for maior que o atual maior (no inicio 0) 
            maior = number[i] //substitui o valor da var maior pelo elemento do indice i
            
        }
    }
    return maior //retorna o valor da var maior que modificada foi, sem ele, nao sairia esse valor!
}

console.log(`o maior numero e: ${greatter()}`)