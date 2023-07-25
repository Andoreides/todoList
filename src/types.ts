let string: string= '123';
let boolean: boolean = false;
let number: number = 456;

interface IObject {
    key: string,
    name: string,
    age: number,
    isStudent?: boolean,
}

let object: IObject = {
    key: '123',
    name: 'Andrey',
    age: 20,

}

type TypeOfSecondObject = {
    name: string,
    age: number,
    isStudent: boolean,
}

let secondObject: TypeOfSecondObject = {
    name: 'Sergey',
    age: 40,
    isStudent: false,
}

interface TypeThirdObject extends TypeOfSecondObject {
    cool: boolean,
    model: string,
    series: number,
}

let thridObject: TypeThirdObject = {
    cool: false,
    model: 'apple',
    series: 10,
    name: 'oleg',
    age: 25,
    isStudent: false,
}

const testFunction = (number1: number, number2: number): number => {
    return number1 + number2
}

const consoleFunction = (text: string | number): void => {
    console.log(text)
}

let lol: any = false;
lol = 123;

let normalLol: unknown = false;
normalLol = 1234;

type Currencies = 'rub' | 'euro' | 'dollar';
let peremennaya:ReadonlyArray <Currencies> = ['euro', 'dollar', 'rub'];

let changedCurrencies: Currencies = 'euro';