//True se a variável a for maior que 10 e menor que 20, ou se a variável b foi igual a 5
//True se a variável a for maior que 10 ou se a variável b for igual 5
//true se a variável a for maior que 10 ou se a variável b for igual a 5, mas não se a variável c foi igual a 10
//true se a variável a for maior que 10 ou se a variável b for igual a 5, mas não se a variavel c for igual a 10
//imprima true se a variavel a for maior que 10 ou se a variavel b for igual a 5, mas nao se a variavel c for igual a 10 e nem se a variável d for igual a 20

let a = 11
let b = 5
let c = 9
let d = 10


let v1 = (a >10 ) && (a <20) || (b === 5)
let v2 = (a >10 ) || (b === 5)
let v3 = (a >10 ) || (b === 5) && !(c === 10)
let v4 = (a >10 ) || (b === 5) && !(c === 10)
let v5 = (a >10 ) || (b === 5) && !(c === 10) && !(d === 20)

console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)
console.log(v5)