function trataErros(array, num){
   
    try{
    if(!array && !num) 
    throw new ReferenceError("Envie os parâmetros")

    if(typeof array !== 'object') 
    throw new TypeError("Array precisa ser do tipo object")

    if(typeof num !== 'number') 
    throw new TypeError("Num precisa ser do tipo Number")

    if(array.lenght !== num) 
    throw new RangeError("Tamanho Inválido")

    return array
   }

   
   // Esse e dentro do catch refere-se ao erro que vai ser tratado
   catch(e){
    if(e instanceof ReferenceError){
        console.log("Este é um ReferenceError")
        console.log(e.message)
    }
    else if(e instanceof TypeError){
        console.log("Este é um TypeError")
        console.log(e.message)
    }
    else if(e instanceof RangeError){
        console.log("Este é um RangeError")
        console.log(e.message)

    }
    else{
        console.log(`Erro ${e} não esperado!`)
    }
   }
}

console.log(trataErros(['a'], 5))