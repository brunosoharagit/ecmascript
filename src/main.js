class App
{
    constructor()
    {
        this.repositories = [];
        
        this.formEl = document.getElementById('repo-form');

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
            description: 'Sua ideia se transforma em realidade.',
            avatar_trl: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat',
        });

        console.log(this.repositories);
    }
}

new App();