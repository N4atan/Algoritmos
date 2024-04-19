function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //false
console.log(minhaFuncao(pessoa, "altura")) //vai imprimir undefined

//a) O que vai ser impresso no console?

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

//1. vai imprimir a propriedade false, que no caso é false
//2. undefined pois nao declaramos essa propriedade