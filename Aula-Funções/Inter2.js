//a. Explique o que essa função faz e qual é sua utilidade. 

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    // i.   `Eu gosto de cenoura`
     //ii.  `CENOURA é bom pra vista`
    // iii. `Cenouras crescem na terra`

    let textoDoUsuario = (`CENOURAS é bom pra vista`);

    const outraFuncao = function(texto) {
        return texto.toLowerCase().includes("cenoura") //toLowerCase: transforma em minusculo toda a frase.
                                                        //includes: retorna true ou false caso contenha certa palavra
    }
    
    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    //A. Transforma em minuscula a frase e verifica se a palavra cenoura está presente na escrita.
    //B.True    True    True