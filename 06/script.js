//REST
const usuario = 
{
    nome: 'Bruno',
    idade: 23,
    empresa: 'Rocketseat',
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);
console.log();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log();


function soma(...params)
{
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

//SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log();

const usuario1 = 
{
    nome: 'Bruno',
    idade: 23,
    endereco:
    {
        bairro: 'Cambuí',
        cidade: 'Campinas',
        uf: 'SP'
    },
}

const usuario2 = {...usuario1, endereco: {...usuario1.endereco}, nome: 'Guilherme'};
console.log(usuario1);
console.log(usuario2);