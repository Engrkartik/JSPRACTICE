// /* // {
// // console.log('Hello Program');
// // console.log('Hello kartik');
// // // console.log();

// // var firstname = 'karitk';
// // var firstname = 'Sahil';
// // console.log(firstname)

// // let second
// // second = "Khan";
// // console.log(second);

// // const pi = 2.14;
// // console.log(pi);
// // }


// /* String things */

// let firstName = "  Rajiv  ";


// // Trim faltu ke space hatata hai
// console.log(firstName.trim().length,firstName.length);

// console.log(firstName.toUpperCase().trim());

// console.log(firstName.toLowerCase().trim());

// console.log(firstName.trim().slice(0,5));

// const bbb = 12;
// // const bbb = [1,2];
// // const bbb = {1:2};

// console.log(bbb+'');
// console.log(String(bbb),'Value in string from number');
// console.log(Number(bbb),typeof(bbb),'Value in number from string');

// let a = "10";
// let b = "10";
// // Use + to change string to number
// console.log(+a + +b);

// let c = "29";
// let name = "kartik"
// console.log(`My name is ${name} and age is ${c}`);
// let arr = [1,2];
// console.log(typeof(arr));
// // console.log(typeof  );
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// // console.log()
// let num1 = "1";
// let num2 = 1;
// console.log(num1==num2);

// // Falsy values
// // false 
// // ""
// // null
// // undefined

// let ab=-1;
// if(ab){
//     console.log(typeof(String(ab)));
// }
// else {
//     console.log("ab is empty")
// }

// let i=1;
// while(i<9)
// {
//     console.log(i); 
// }

// const grlist = [
//     {item:'apple', price:25, qty:34},
//     {item:'ginger', price:30, qty:44},
//     {item:'mango', price:80, qty:45},
// ];

// const[{item,...items}]=grlist;
// const newarr = grlist.map((v)=>(
//     {'price':v.price,'qty':v.qty}
// ))

// console.log('Items list',newarr);


// const mern = ['react','node'];
// const lee = [...mern];
// const stack = [...mern,'express','mongo']
// console.log(`Value of stack ${stack}`);
// console.log(`Value of lee ${lee}`);

// /* Rest Operator */
// const check = (...args) => {
//      let sum = 0;   
//     for(let i of args) {
//         sum+=i;
//        }
//        console.log(sum);
// }
// check(10,20,30);

// var marn = ['nn','fd','dfg','se'];
// var[a,b,...s] = marn;
// console.log(a);
// console.log(b);
// console.log(s);


// let marks = [10,20,30];
// for (let mark of marks){
//     mark+=5;
//     console.log(mark);
// }
// console.log(mark);



let a = 1;
let b = 1;
let c = 1;

console.log(a === b === c);
let data = {Name: 'kartik', Age: 22, skill: 'javascript'};
let andata = {City: 'Delhi', mail:'engr.kartik2014@gmail.com'};

let newobj = {...data,...andata,address:'Harsh Vihar'};
console.log(newobj);


let res = false || true || [] || {} ;

console.log(res);

var x = 120;
console.log(x);
x = 140;
let X = 140;
console.log(x);
var y = NaN;
var x = 33;
var y = true;

{
    x =150;
    console.log(x);
    console.log(y);
    console.log(typeof y);
}
{
    console.log(x + 12 + y);
}
// {
//     x
// }

console.log(ab);
var ab = 10;
{
    var ab = -10;
console.log(ab);
}
var abb ="priyanka";
var ab ="priyanka";
const abc = ab;
 abc = abb;
{
    let abc = -20;
console.log(abc);

}
console.log(abc);