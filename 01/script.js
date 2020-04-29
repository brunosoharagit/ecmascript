class TodoList
{
    constuctor()
    {
        this.todos = [];
    }

    addTodo()
    {
        this.todos.push('novo todo');
        console.log(this.todos);
    }
}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function()
{
    minhaLista.addTodo();
}