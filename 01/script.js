class List
{
    constructor()
    {
        this.data = [];
    }

    add(data)
    {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List
{
    constructor()
    {
        super();
        this.user = 'Bruno';
    }

    showUser()
    {
        console.log(this.user);
    }
}



const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function()
{
    minhaLista.add('Novo Todo');
}

minhaLista.showUser();

class Math
{
    static sum(a, b)
    {
        return a + b;
    }
}

console.log(Math.sum(1, 5));