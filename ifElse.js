//questão 1
function tiposDeTriangulo(lado1,lado2,lado3){
    if(lado1===lado2 && lado2===lado3){
        console.log("Triângulo Equilátero")
    }else if(lado1===lado2||lado1===lado3||lado2===lado3){
        console.log("Triângulo Isósceles")
    }else{
        console.log("Triângulo Escaleno")
    }
}
tiposDeTriangulo(3,3,6)

//questão 2
let saldo = 300;

function realizarSaque(valorSaque) {
    if (valorSaque <= saldo) {
        saldo -= valorSaque; 
        console.log(`Saque de R$ ${valorSaque} realizado com sucesso!`);
        console.log(`Seu saldo atual é de R$ ${saldo}.`);
    } else {
        console.log("Saldo insuficiente para realizar o saque.");
    }
}

realizarSaque(100); 


//questão 3
function calculadora(operacao,numb1,numb2){
    switch(operacao){
        case 'adição':
            console.log('Resultado',numb1 + numb2)
            break
            case 'subtração':
                console.log('Resultado', numb1 - numb2)
                break
                case 'multiplicação':
                    console.log('Resultado', numb1 * numb2)
                    break
                    case 'divisão':
                        console.log('Resultado',numb1/numb2)
                        break
                        default:
                            console.log('Operação Inválida')
    }
}
calculadora('subtração', 4, 2)

//questão 4
function classificarNadador(idade) {
    if (idade >= 5 && idade <= 7) {
        console.log("Categoria: Infantil A (5 - 7 anos)");
    } else if (idade >= 8 && idade <= 10) {
        console.log("Categoria: Infantil B (8 - 10 anos)");
    } else if (idade >= 11 && idade <= 13) {
        console.log("Categoria: Juvenil A (11 - 13 anos)");
    } else if (idade >= 14 && idade <= 17) {
        console.log("Categoria: Juvenil B (14 - 17 anos)");
    } else if (idade >= 18) {
        console.log("Categoria: Adulto (maiores de 18 anos)");
    } else {
        console.log("Idade inválida para classificação.");
    }
}

classificarNadador(16)


// questão 5 
function creditoEspecial(saldoMedio){
    let credito
    if(saldoMedio >=601){
    credito=saldoMedio *0.4
    }else if (saldoMedio >=401){
        credito=saldoMedio *0.3
    }else if(saldoMedio >= 201){
        credito=saldoMedio *0.2
    }else{
        credito=0
    }
    console.log("Saldo Médio", saldoMedio, "R$ Crédito", credito)
}
creditoEspecial(500)

