let funcionario = [
  {
    nome: 'Euclides',
    idade: 21,
    cargo: 'Analista de sistemas',
    tecnoglogia: [],
  },
  {
    nome: 'Linton',
    idade: 30,
    cargo: 'Analista de sistemas',
    tecnoglogia: 'Tudo',
  },
];

console.log(funcionario[0]);

funcionario.push({
  nome:'Richard',
  idade:'27',
  cargo:'aluno',
  tecnoglogia:'Android'
});

console.log(funcionario);


for(i=0;i<funcionario.length;i++){
  if(funcionario[i].nome === 'Euclides'){
    funcionario[i].tecnoglogia.push('TI');
    funcionario[i].tecnoglogia.push('TI2');
    funcionario[i].tecnoglogia.push('TI3');
  }
}

console.log(funcionario);