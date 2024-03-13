let a = 10
let b = 25

let c //Aqui crio outra para poder modificar a 'a' 'b'.

c = a //C vem primeiro pois está vázio, agorá esta igual a A
a = b //A = B = 25
b = c //B = C = 10

console.log("Novo valor de A é", a)
console.log("novo valor de b é", b)

