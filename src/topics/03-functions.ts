function addNumbers(a: any, b?: any): number {

    return a + b;
}


const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
};


function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
};

interface Character {
    name: string;
    pv: number;
    showHp: () => void;
};

const healCharacter = (character: Character, amount: number) => {
    character.pv += amount;
}

const strider: Character = {
    name: "Strider",
    pv: 50,
    showHp() {
        console.log(`HP: ${this.pv}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 10);

strider.showHp();

export { };