// // const person={
// //   name:"tarun",
// //   age:21,
// //   greet:function(){
// //     console.log(`my name is ${this.name}  and age is ${this.age}`)
// //   },
// // };
// // person.greet();
// // function one()
// // {
// //   let user="tarun";
// //   console.log(this.user);
// // }
// // one();
// const person1={
//   name:"tarun",
//   age:21,
//   greet:function(){
//     return this.name;
//   },
// };
// let p1=person.greet;
// console.log(p1());
// function greet(city,country){
//   console.log(`i am ${this.name} from ${city} , ${country}` )
// }
// const person1={
//   name:"tarun",
// };
// const fn=greet.bind(person,"Gorakhpur","India");
// fn();
// function multiply(a,b){
//   return a*b;
// }
// const double=multiply.bind(null,2);
// console.log(double(5));
function person(name){
  this.name=name;
}
person.getname=function(){
  return this.name;
}
let p1=new person("tarun");
console.log(p1.getname);
console.log(person.prototype.getname);
const person1={
  name:"tarun"
};
function display(massage){
  console.log
}