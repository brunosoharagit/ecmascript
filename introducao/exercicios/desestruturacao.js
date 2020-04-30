//Desestruturação simples
const usuario = 
{
    nome: 'Diego',
    idade: 23,
    endereco:
    {
        cidade: 'Rio do Sul',
        uf: 'SC',
    },
}

const {nome, idade, endereco: {cidade, uf}} = usuario

console.log(nome);
console.log(cidade);
console.log(uf);
console.log();

//Desestruturação em parâmetros
function mostraInfo(usuario)
{
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(usuario));