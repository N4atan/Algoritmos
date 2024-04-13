//4.
console.log(`---------------4.------------`)
let soma = 0;

for (let a = 1; a <= 10; a++) {
    soma += a
}

console.log(soma)

//5.
console.log(`---------------5.------------`)
let number = [8, 6, 10, 5, 4]
let somaMedia = 0



for (let b = 0; b < number.length; b++){
    somaMedia += number[b] 
}
let media = somaMedia / number.length
console.log(media)

//6
console.log(`---------------6.------------`)
for (let c = 1; c <= 20; c++){
    if(c % 2 === 0 && c % 3 !== 0){  //primeiro verifica se é par, depois caso seja multiplo de 3, o resultado sera 0, mas na condicção, diz se diferente de 0, mostra o numero
        console.log(c)
    }

}
