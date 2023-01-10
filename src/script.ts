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
function explicit(name: string, age: number, date: Date) {
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
let myfunc: Function

myfunc = (a: number, b: number, c?: number) => {
    console.log(a);
    console.log(b);
    console.log(c);
}
myfunc(4, 5, 6)

const novoid = (a: number, b: number, c?: number) => {
    return (a + b)
}
novoid(3, 5, 6)

// Aliases type
//1st
const useDetails = (id: number | string, age: number) => {
    console.log(`${id} is id & age is ${age}`);
};
useDetails('345', 27);

// 2nd
const sayHello = (user: { name: string, age: number }) => {
    console.log(`name is ${user.name} & age is ${user.age}`);
};



type stringOrNumber = string | number;
type userType = { name: stringOrNumber, age: number };

const allisFunc = (id: number, user: userType) => {
    console.log(`id is ${id}, name is ${user.name} & age ${user.age}`);
}

allisFunc(2, { name: "sayed", age: 27 });


// function signiture
// 1st
let testfunc: (x: number, y: number, z: string) => number;

testfunc = (a, b, c) => {
    if (c === 'add') {
        return a + b
    } else {
        return a - b
    }
}
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
    
    constructor (
        public name: string,
        private age: number,
        readonly country: string
    ){}

    play() {
        console.log(`Name: ${this.name}. player age: ${this.age} from ${this.country}`);
    }
};
const mashrafi = new captain("Mashrafi", 40, "Bangladesh");
const sakib = new captain("Sakib", 37, "Bangladesh");

const players: captain[] = [];
players.push(mashrafi);
players.push(sakib);
    console.log(mashrafi.country);
    mashrafi.name = "Mortaza"
    console.log(mashrafi.name);

    // mashrafi.age = 34 (don't work, it's private)
    // console.log(mashrafi.age);(don't work, it's private)

    // mashrafi.country = "England" (don't work, it's readonly)
    console.log(mashrafi.country);


        //generic type
function addId <T extends {name: string,age:number}>(obj: T) {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}
}

let user = addId({
    name:'sakib',
    age: 35,
    country: "Bangladesh"
});

// let user = "kuddos" 

user.age
user.country

        // generic & interface type
interface apiResponse<T> {
    status: number,
    type: string,
    data: T
}
const response1 : apiResponse<object>  = {
    status: 200,
    type: 'done',
    data:  {
        name: 'kuddos',
        from: "Bangladesh"
    },
    //data:"kuddos" is error
}
