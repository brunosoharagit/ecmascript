const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.map(item => item * 10).filter(item => item > 40);
console.log(newArr);

const soma = (a, b) => (a + b)
console.log(soma(1, 5));

const teste = () => [1, 3, 4, 7, 11, 18, 29, 47, 76];
console.log(teste());

const user = () => ({nome: 'Bruno'});
console.log(user());