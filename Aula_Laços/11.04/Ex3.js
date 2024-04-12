//Considere que você tem um array com várias palavras. Nossa tarefa é criar uma função para imprimi-las em uma sómensagem colocando um espaço entre elas.
//Ex: Para este array ["Oi", "sumido", "tudo", "bem?", "Saudades"], dar amensagem "Oi sumido tudo bem? Saudades"

let phrase = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
let mensagem = ""


function catTudo(){
    //a var palavra armazena cada elemento da array pra dps somar. 
    for (let palavra of phrase){
        //+= nao precisa escrever a var dnv, essa string que parece vazia na vdd é pra adicionar espaço, sendo isso cat de string.
        mensagem += palavra + " "
    }

    console.log(mensagem)   
}

catTudo()
