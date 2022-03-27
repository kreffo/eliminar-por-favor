const myName = 'Adrian';
const myAge = 12;
const suma = (a: number, b: number) => {
    return a + b;
}
suma(12, 12);

class Persona {

    constructor(private _age: number, private _name: string) { }

    get age(): number {
        return this._age;
    }

    get name(): string {
        return this._name;
    }

    set age(newAge: number) {
        this._age = newAge;
    }

    set name(newName: string) {
        this._name = newName;
    }

    getSummary() {
        return `my name is ${this.name} and my age is ${this.age}`;
    }
}

const nicolas = new Persona(14, 'nicolas');

nicolas.getSummary();
nicolas.age = 3;
nicolas.getSummary();

