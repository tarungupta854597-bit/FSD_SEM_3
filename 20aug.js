const student={
    1:'cse',
    name:'js'
};
console.log(student['1']);
// const sym=symble('btech');
// const person=new Object();
// person[sym]=123;
// person.name='js';
// console.log(person);
let p={
    name:'a',
};
p={age:25};
p.dept='cse';
console.log(p);
// method to add an object
const Person={
    name:'abc',

};
Person.greet=function()
{
    console.log('hello'+ this.name)
}
console.log(Person.greet());