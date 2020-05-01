const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Ok') }, 2000);
});

async function executaPromise()
{
    const response = await minhaPromise();
    
    console.log(response);
}

executaPromise();