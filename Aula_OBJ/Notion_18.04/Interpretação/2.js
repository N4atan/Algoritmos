const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}
//obj gato =
//nome: "Juba", 
//idade: 3, 
//raca: "SRD"

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//obj tartaruga = 
//nome: "Jubo", 
//idade: 3, 
//raca: "SRD"

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) O que vai ser impresso no console?

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? sign. que vai copiar o obg que esta n a frente