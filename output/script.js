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
