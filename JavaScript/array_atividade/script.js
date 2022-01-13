const alunos = [
    {
        nome: "Leonardo",
        nota: 9,
        turma: "3B"
    },
    {
        nome: "Simone",
        nota: 8,
        turma: "3A"
    },
    {
        nome: "Aline",
        nota: 7,
        turma: "3C"
    },
    {
        nome: "Sthefany",
        nota: 5,
        turma: "3F"
    },
];

function alunosAprovados(array, media){
    let aprovados = [];


    for(let i = 0; i < array.lenght; i ++){
        
        // Object destructing
        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome)
        } 
        else{
            console.log("deu ruim")
        }

    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 7))

