function calculadora(){
    const operacao = prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)")

    if(!operacao || operacao >= 7){
        alert("ERRO, OPERAÇÃO INVÁLIDA ")
        calculadora()
    }
    else{
        let n1 = Number(prompt("Insira o 1° valor: "))
    let n2 = Number(prompt("Insira o 2° valor: "))
    let resultado;

    if(!n1 || !n2){
        alert("ERRO, Valor(es) inválido(s)")
        calculadora()
    }
    else{
        function soma(){
            resultado = n1 + n2;
            alert(`A soma entre ${n1} + ${n2} = ${resultado}`);
            novaOperacao()
        }
    
        function subtracao(){
            resultado = n1 - n2;
            alert(`A subtração entre ${n1} - ${n2} = ${resultado}`);
            novaOperacao()
        }
    
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`A multiplicação entre ${n1} * ${n2} = ${resultado}`);
            novaOperacao()
        }
    
        function divisaoReal(){
            resultado = n1 / n2
            alert(`A divisão real entre ${n1} / ${n2} = ${resultado}`);
            novaOperacao()
        }
    
        function divisaoInteira(){
            resultado = n1 % n2
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao()
        }
    
        function potenciacao(){
            resultado = n1 ** n2
            alert(` ${n1} elevado a ${n2}ª = ${resultado}`);
            novaOperacao()
        }
    
        function novaOperacao(){
            let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não")
            if(opcao == 1){
                calculadora()
            }
            else if (opcao == 2){
                alert("Até mais!")
            }
            
        }
    }

    if(operacao == 1){
        soma()
    }
    else if(operacao == 2){
        subtracao()
    }
    else if(operacao == 3){
        multiplicacao()
    }
    else if(operacao == 4){
        divisaoReal()
    }
    else if(operacao == 5){
        divisaoInteira()
    }
    else if(operacao == 6){
        potenciacao()
    
    }
    else{
        console.log("Valor inválido")
        calculadora()
    }

}
    
}

calculadora()
