function comparaNumeros(){
    n1 = Number(prompt("Digite um número"))
    n2 = Number(prompt("Digite mais um número:"))
    soma = n1 + n2

    if(!n1 || !n2 || !n1 && !n2){
        alert("ERRO, DIGITE APENAS NÚMEROS!!")
        comparaNumeros()
    }
    else{
        if(n1 === n2 ){
            iguais = alert(`Os números ${n1} e ${n2} são iguais`)
            simOuNao()
        } else{
            if(soma > 10 && soma < 20){
                alert(`sua soma é ${soma},A que é maior que 10 e menor que 20`)
                simOuNao()
            }
            else if(soma < 20 && soma < 10){
                alert(`sua soma é ${soma}, que é menor que 10 e menor que 20`)
                simOuNao()
            }
            else if(soma > 10 && soma > 20){
                alert(`sua soma é ${soma}, que é maior que 10 e maior que 20`)
                simOuNao()
            }
            else{
                alert("DEU RUIM")
            }
        }
    }
}
function simOuNao(){
    var opcao = Number(prompt('Deseja digitar mais numeros?\n 1 - Sim\n 2 - Não'))
    if(opcao == 1){
        comparaNumeros()
    } 
    else{
        alert("Até mais!")
    }
}

comparaNumeros()
