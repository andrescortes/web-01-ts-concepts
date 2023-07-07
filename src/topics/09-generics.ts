export function whatsMyType<T>(argument: T): T{
    return argument;
};

let aimString:string = whatsMyType<string>('hello');
console.log(aimString.split(''));

const aimNumber = whatsMyType<number>(123);
console.log(aimNumber);
const aimBoolean = whatsMyType<boolean>(true);
console.log(aimBoolean);
const aimArray = whatsMyType<number[]>([1,2,3,4]);
console.log(aimArray);