const pessoa ={
    nome: 'Richard',
    idade: 27,
    like: ['Academia', 'Comer'],
    acao: function(){
        console.log(pessoa.like[1]);
    }
}

console.log(pessoa);
console.log(pessoa.like);
console.log('resposta');
pessoa.acao();

console.log();
