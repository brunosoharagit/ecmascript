//Operações com Arrays
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//a) map
const mapArr = arr.map((item) => item * 2);
console.log(mapArr);

//b) filter
const filtArr = arr.filter((item) => item % 2 === 0 ? true : false);
console.log(filtArr);

//c) find
const findArr = arr.filter((item) => item === 6 ? true : false);
console.log(findArr);

//d) reduce
const redArr = arr.reduce((total, next) => total + next);
console.log(redArr);
