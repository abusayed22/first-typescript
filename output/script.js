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
// dynamic 
