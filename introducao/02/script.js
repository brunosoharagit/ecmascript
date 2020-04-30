//Mutação
const usuario = {nome: 'Isabella'};

usuario.nome = 'Bruno';
console.log(usuario);

//let
let y = 1;

function coords(x)
{
    let y = 2;

    if (x > 5)
    { 
        console.log(x, y);
    }
}

coords(9);