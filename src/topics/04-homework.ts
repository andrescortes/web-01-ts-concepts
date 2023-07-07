interface Address {
    street: string;
    pais: string;
    ciudad: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress(): string;
}

const showDataSuperHero = (superHero: SuperHero) => {
    return superHero.name + ', ' + superHero.address.ciudad + ', ' + superHero.address.pais;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return showDataSuperHero(this);
    },
}


const address = superHeroe.showAddress();
console.log(address);




export { };