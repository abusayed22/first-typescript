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



// dynamic or any type (don't use any type , if very needed this type so can use)
let b: any[] = [];
b.push('sayed');
b.push(27)
b.push(true);

let c: {
    name: any,
    age: any,
    adult: any
}
c = {
    name: 27,
    age: 'sayed',
    adult: true
}

// special type ::: function type (is more importent)
let myfunc:Function

myfunc = (a:number, b:number ,c?: number) => {
    console.log(a);
    console.log(b);
    console.log(c);
}
myfunc(4,5,6)

const novoid = (a:number, b:number, c?: number) => {
    return (a+b)
}
novoid(3,5,6)