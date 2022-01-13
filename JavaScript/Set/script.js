const meuArray = [1, 3, 7349, 45, 9667 ]


function valoresUnicos(array){
    const mySet = new Set(array)

    return [...mySet]
}

console.log(valoresUnicos(meuArray))