class Usuario
{
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
    }

    isAdmin()
    {
        return this.admin === true;
    }
}

class Admin extends Usuario
{
    constructor()
    {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('bruno.soharaWgmail.com', '1234567');
const Admin1 = new Admin('nheonfelix@gmail.com', 'querocomercu');

const res1 = User1.isAdmin();
const res2 = Admin1.isAdmin();

console.log(res1);
console.log(res2);