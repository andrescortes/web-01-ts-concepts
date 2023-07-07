export interface Passenger {
    name: string;
    children?: string[];
}

const passeger1: Passenger = {
    name: "Carlos"
};

const passeger2: Passenger = {
    name: "Maria",
    children: ["Juan", "Pedro"]
};

const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;
    console.log(`${passenger.name} has ${howManyChildren} children:`);
    return howManyChildren;
}

printChildren(passeger1);
printChildren(passeger2);