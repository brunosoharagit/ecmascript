//Operações com Arrays
const arr = [0, 1, 3, 5, 7, 8, 9];


//a) map
const mapArr = arr.map((item) => item * 2);
console.log(mapArr);

//b) filter
const filtArr = arr.filter((item) => item % 2 === 0);
console.log(filtArr);

//c) find
const findArr = arr.find((item) => item === 1);
console.log(findArr);

//d) reduce
const redArr = arr.reduce((total, next) => total + next);
console.log(redArr);
