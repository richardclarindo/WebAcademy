let array = [
  {
    id: 1,
    name: 'John',
    age: 23,
  },
  {
    id: 2,
    name: 'Samuel',
    age: 21,
  },
  {
    id: 3,
    name: 'marvin',
    age: 26,
  },
  {
    id: 4,
    name: 'james',
    age: 28,
  },
];


function funcaoTest(valor1){

    console.log(valor1.name);
    console.log(valor1.id);
    console.log(valor1.age);
}

funcaoTest(array[0]);


const funcao = () => {
    {
        ola: 'ola';
    }
};

console.log(funcao());


const calculoIdade = (ano) => 2023 - ano;

console.log(calculoIdade(1996));

const resultado = array.map((resposta) => {
    console.log(resposta);
    return;
});

const filtro = array.filter((resposta){
    return resposta.id === 2;
});

const someFuncao = array.some((resposta){
    return resposta.id == 1;
});

console.log(someFuncao);