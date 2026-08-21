// // const student={
// //     1:'cse',
// //     name:'js'
// // };
// // console.log(student['1']);
// // // const sym=symble('btech');
// // // const person=new Object();
// // // person[sym]=123;
// // // person.name='js';
// // // console.log(person);
// // let p={
// //     name:'a',
// // };
// // p={age:25};
// // p.dept='cse';
// // console.log(p);
// // // method to add an object
// // const Person={
// //     name:'abc',

// // };
// // Person.greet=function()
// // {
// //     console.log('hello'+ this.name)
// // }
// // console.log(Person.greet());
// const person={
//     name:'abc',
//     greet:function(){
//         console.log('hall0'+this.name);
//     }
// };
// person.greet()
// const Person={
//     name:'tarun',
//     age:'21',
//     laptop:{
//         cpu:'i5',
//         ram:'16',
//         brand:'dell',
//     }
// }
// console.log(Person.laptop.cpu);
const a={
    a:1,
    b:2
};
const b={
    b:3,
    c:4,
};
let m=Object.assign({},a,b);
console.log(m);
