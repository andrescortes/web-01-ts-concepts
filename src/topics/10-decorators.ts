function classDecorator<T extends { new(...args: any[]): {} }>(construct: T) {
    return class extends construct {
        newProperty = 'newProperty';
        hello = 'world';
    }
}
@classDecorator
export class SuperClass {
    public myProperty: string = 'myProperty';
    print() {
        console.log('Hello World!');
    }
}

console.table(SuperClass);

const myClass = new SuperClass();
console.table(myClass);

