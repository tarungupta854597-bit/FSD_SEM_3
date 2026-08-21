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
// const a={
//     a:1,
//     b:2
// };
// const b={
//     b:3,
//     c:4,
// };
// // let m=Object.assign({},a,b);
// let r1={...a,...b};
// console.log(r1);
const p1={
    name:'amit',
    laptop: {
        cpu:'i7',
        ram:'8gb',

    }
};
const p2=structuredClone(p1);

// const p2={...p1};
 p2.laptop.cpu='i9';
 const p3=JSON.parse(JSON.stringify(p1))
 p3.laptop.ram='16gb';

console.log(p1.laptop.cpu);
console.log(p2.laptop.cpu);
console.log(p1.laptop.ram);
console.log(p3.laptop.ram);
let name='js';
console.log(`${name} programing`);
console.log("hello,\"what\'s up there\"");


