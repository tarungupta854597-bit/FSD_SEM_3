// // // callback function
// // function calculater(a,b,operation)
// // {
// //   return operation(a,b);
// // }
// // function add(a,b)
// // {
// //   return a+b;
// // }
// // function substract(a,b)
// // {
// //   return a-b;
// // }
// // function multiply(a,b)
// // {
// //   return a*b;
// // }
// // function divide(a,b)
// // {
// //   return a/b;
// // }
// // console.log(calculater(5,7,add));
// // console.log(calculater(5,7,substract));
// // console.log(calculater(5,7,multiply));
// // console.log(calculater(5,7,divide));
// // const add =(
// //   a
// //   ,b
// // )=> {console.log(a+b)};
// // add(5,8);
// const calculater=(a,b,operation)=>
// {
//   return operation(a,b);
// }
// const add=(a,b)=> {return a+b}
// const substract=(a,b)=>
// {
//   return a-b;
// }
// const multiply=(a,b)=>
// {
//   return a*b;
// }
// const divide=(a,b)=>
// {
//   return a/b;
// }
// console.log(calculater(5,7,add));
// console.log(calculater(5,7,substract));
// console.log(calculater(5,7,multiply));
// console.log(calculater(5,7,divide));
// const sum1=(a,b)=>
// {
//   if(b<0)
//   {
//     console.log("plase enter a positive number");
//   }
//   else
//   {
//     console.log( a+b);
//     }
// }
// sum1(3,-7)
// sum1(4,8);
// console.log(add instanceof Function);
// const even=(a)=>
// {
//  for(let i=0;i<a.length;i++)
//  {
//   if(a[i]%2==0)
//   {
//     console.log(a[i]);
//   }
//  }
// };
// const arr=[1,2,3,4,5,6,7,8,9,10];
// even(arr);
// const fun=()=>({user:"Tarun"});
// console.log(fun());
// let arr = [10, 15, 22, 33];
// for (let [index, value] of arr.entries()) {
//     console.log("Index:", index, "Value:", value);
// }
function text(a,b){
  const show =()=>{
    console.log(arguments);
  };
  show();
}
text(10,20);
// const person=(name)=>{
//   this.name=name;
// }
// const p1=new person("Tarun");
// console.log(p1.name);
const person1=()=>{
  console.log(person1.prototype);
}
person1();