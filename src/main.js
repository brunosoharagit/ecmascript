class App
{
    constructor()
    {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers()
    {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event)
    {
        event.preventDefault();

        this.repositories.push({
            name: 'Rocketseat',
            description: 'Sua ideia se transforma em realidade',
            avatar_url: 'https://avatars0.githubusercontent/u/28929274?v=4',
            html_url: 'https://github.com/rocketseat',
        });

        this.render();
    }

    render()
    {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imageEl = document.createElement('img');
            imageEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descEl = document.createElement('p');
            descEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imageEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();