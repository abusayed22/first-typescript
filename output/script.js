"use strict";
let player = 'Mashrafi';
let num;
num = 34;
let bul;
bul = false;
console.log(player);
let a;
a = {
    name: 'sayed',
    age: 27,
    addult: true
};
// explicit type
function explicit(name, age, date) {
    console.log(`my name is ${name}, i am ${age} years old & now date ${Date}`);
}
;
explicit('sayed', 27, new Date());
// union type
let arr = [];
arr.push('sayed', 27, true);
// dynamic or any type (don't use any type , if very needed this type so can use)
let b = [];
b.push('sayed');
b.push(27);
b.push(true);
let c;
c = {
    name: 27,
    age: 'sayed',
    adult: true
};
// special type ::: function type (is more importent)
let myfunc;
myfunc = (a, b, c) => {
    console.log(a);
    console.log(b);
    console.log(c);
};
myfunc(4, 5, 6);
const novoid = (a, b, c) => {
    return (a + b);
};
novoid(3, 5, 6);
// Aliases type
//1st
const useDetails = (id, age) => {
    console.log(`${id} is id & age is ${age}`);
};
useDetails('345', 27);
// 2nd
const sayHello = (user) => {
    console.log(`name is ${user.name} & age is ${user.age}`);
};
const allisFunc = (id, user) => {
    console.log(`id is ${id}, name is ${user.name} & age ${user.age}`);
};
allisFunc(2, { name: "sayed", age: 27 });
// function signiture
// 1st
let testfunc;
testfunc = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
testfunc(6, 4, 'add');
// classes type
// class captain {
//     name: string;
//     age: number;
//     country: string
//     constructor (n:string, a:number ,c: string) {
//         this.name= n,
//         this.age= a,
//         this.country= c
//     }
//     play() {
//         console.log(`Name: ${this.name}. player age: ${this.age} from ${this.country}`);
//     }
// };
// const mashrafi = new captain("Mashrafi", 40, "Bangladesh");
// const sakib = new captain("Sakib", 37, "Bangladesh");
// const players: captain[] = [];
// players.push(mashrafi);
// players.push(sakib);
// access modifier
class captain {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`Name: ${this.name}. player age: ${this.age} from ${this.country}`);
    }
}
;
const mashrafi = new captain("Mashrafi", 40, "Bangladesh");
const sakib = new captain("Sakib", 37, "Bangladesh");
const players = [];
players.push(mashrafi);
players.push(sakib);
console.log(mashrafi.country);
mashrafi.name = "Mortaza";
console.log(mashrafi.name);
// mashrafi.age = 34 (don't work, it's private)
// console.log(mashrafi.age);(don't work, it's private)
// mashrafi.country = "England" (don't work, it's readonly)
console.log(mashrafi.country);
