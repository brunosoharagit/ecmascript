 //Valores padrão
 function soma (a = 1, b = 9)
 {
     return a + b;
 }

 console.log(soma(7, 4));
 console.log(soma(6));
 console.log(soma());
 console.log();

 //Desestruturação
 const usuario = 
 {
     nome: 'Bruno',
     idade: 23,
     endereco: {
         cidade: 'Campinas',
         uf: 'SP'
     },
 }

 const {nome, idade, endereco: {cidade, uf}} = usuario;

 console.log(nome);
 console.log(idade);
 console.log(cidade);
 console.log();

 function mostraNome(usuario)
 {
     console.log(`Nome escolhido: ${nome}`);
 }

 mostraNome(usuario);
