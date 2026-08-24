// // // // let x=10;
// // // // let str=" ";
// // // // console.log(typeof str);
// // // // let str1=String('10');
// // // // console.log(str+=str1)


// // // //Multiline String
// // // let str=` this is 
// // // multiline string
// // // in javascript`;
// // // console.log(str);

// // // //Accessing Characters
// // // let x='JavaScript';
// // // x[0]='A';
// // // console.log(x);

// // // const y='javaScript'
// // // y[0]='A';
// // // console.log(y)

// // // //slice(start,end)

// // // //comparition string
// // let  str="tarun";
// // console.log(str);
// // let str1="v"+str.slice(1);
// // console.log(str1);
// // console.log(str);

// const str1='hello';
// const str=new String('hello')
// console.log(str1==str);
// console.log(str===str1);
// console.log(typeof(str1));
// console.log(typeof(str));

// const arr=[1,2,3];
// const copy1=arr.slice();
// console.log(copy1);
// const fruits=["apple","banana","grapse"];
// const copy=fruits.slice();
// console.log(fruits),
// console.log(copy);
// console.log(copy.slice(-1));
// console.log(copy.slice(-2));


// const arr=[1,2,3,4,5];
// const removed=arr.splice(1,2);
// console.log(removed);
// console.log(arr);
// const arr1=[1,4,5];
// arr1.splice(1,0,2,3);
// console.log(arr1);
// const arr2=[1,5,2,5,7,3,6,8,3,2,8,3];
// arr2.splice(arr2.length,0,3,4,6,3,7);
// console.log(arr2);


const x='5';
console.log(x.padStart(5,0));
const z='js';
console.log(z.charCodeAt(-1));
let y='😒😒😒😒😒';
console.log(y.charCodeAt(0));
console.log(y);
const str="javascript";
const arr=[...str];
console.log(arr);
const str1='2+4';
const newstring=new String(str1);
console.log(eval(str1));
console.log(eval(newstring));
const 