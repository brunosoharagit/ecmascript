//REST
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log(x);
console.log(y);
console.log();

const soma = (...params) =>
{
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));
console.log();

//SPREAD
const usuario = 
{
    nome: 'Diego',
    idade: 23,
    endereco: 
    {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil'
    }
}

const usuario1 = {...usuario, endereco: {...usuario.endereco}, nome: 'Gabriel'};
const usuario2 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario1);
console.log(usuario2);