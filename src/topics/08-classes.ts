export class Person {
    constructor(
        public name: string,
        public address: string,
        public lastName: string
    ) { }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string, 
//         public age: number,
//         public realName: string
//         ) {
//         super(realName,'New York');
//     }
// }
export class Hero {
    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName,'New York');
    }
}
let person = new Person('Tony',"Start", "New York");
const hero = new Hero('IronMan', 30, 'Tony Stark', person);
console.table(hero);
