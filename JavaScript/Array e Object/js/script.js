/* O que são Arrays e Objetos */

// Como declarar um Array
// Pode armazenar vários tipos de variáveis
let array = ['String', 2, 8.4, true];
console.log(array)

// forEach - mostra as variaveis e seus indices

/* array.forEach(function(item, index){
    console.log(item, index);
}) */

// Push - adiciona um item no final do array

/* array.push('Novo item')
console.log(array) */

// Pop - remove o ultimo item do array

/* array.pop()
console.log(array)
 */

// Unshift - adiciona um item no começo do array 

/* array.unshift("Adiciona item no começo do array")
console.log(array) */

// Shift - remove item do inicio do array

/* array.shift()
console.log(array)
 */


// indexOf - mostra o indice de um valor

/* console.log(array.indexOf(true)) */

// Splice - remove ou substitui um item pelo indice

/* array.splice(0, 2)
console.log(array) */

// Slice

/* let novoArray = array.slice(0, 2)
console.log(novoArray) */


// Como criar um objeto e acessar seus valores

let object = {
    string: "String",
    number: 1,
    boolean: true,
    array: ["String"],
    objectInterno: {
        objectInterno: 'Objeto interno'
    }

}
console.log(object.objectInterno)

// desestruturando um objeto
var string = object.string
console.log(string)

var { string, number, boolean} = object
console.log(string, number, boolean)




