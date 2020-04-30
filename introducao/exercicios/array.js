const usuarios = 
[
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    {nome: 'Lucas', idade: 34, empresa: 'Facebook'},
];

//map (2.1)
const idade = usuarios.map(users => users.idade);
console.log(idade);

//filter (2.2)
const usuario2 = usuarios.filter(users => users.empresa === 'Rocketseat' && users.idade > 18);
console.log(usuario2);

//find (2.3)
const google = usuarios.find(users => users.empresa === 'Google');
console.log(google);

//union (2.4)
const union = 
usuarios.map
(users => ({...users, idade: users.idade*2}))
.filter(users => users.idade < 50);
console.log(union);