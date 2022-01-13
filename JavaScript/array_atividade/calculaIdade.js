function calculaIdade(anos){
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
    nome: "Leonardo",
    idade: 18,

};

const pessoa2  = {
    nome: "Isis",
    idade: 18
};

console.log(calculaIdade.call(pessoa1, 30))
