let player: string = 'Mashrafi';
let num: number;
num = 34
let bul: boolean;

bul = false

console.log(player);

let a: {
    name: string,
    age: number,
    addult: boolean
};
a = {
    name: 'sayed',
    age: 27,
    addult: true
};

// explicit type
function explicit(name:string,age:number, date: Date) {
    console.log(`my name is ${name}, i am ${age} years old & now date ${Date}`);
};
explicit('sayed', 27, new Date())

// union type
let arr: (string | number | boolean)[] = [];
arr.push('sayed', 27, true);



// dynamic 