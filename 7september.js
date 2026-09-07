// const person={
//   name:"tarun",
//   age:21,
//   greet:function(){
//     console.log(`my name is ${this.name}  and age is ${this.age}`)
//   },
// };
// person.greet();
// function one()
// {
//   let user="tarun";
//   console.log(this.user);
// }
// one();
const person1={
  name:"tarun",
  age:21,
  greet:function(){
    return this.name;
  }
};
let p1=person1.greet.bind(person1);
console.log(p1());
