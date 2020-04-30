//3.1
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(item => item + 10);
console.log(newArr);
console.log();

//3.2
const usuario = {nome: 'Diego', idade: 23};

const mostraIdade = usuario => usuario.idade;
const r = mostraIdade(usuario);
console.log(r);
console.log();

//3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 23) => { nome, idade};
console.log(nome, idade);
console.log(idade);
console.log(nome);
console.log();

//3.4
const promise = () => { return new Promise (function(resolve, reject) { return resolve(); })}

console.log(promise());
console.log();