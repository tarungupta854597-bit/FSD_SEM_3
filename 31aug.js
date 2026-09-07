// function display(a,b)
// {
//     return a+b;
// }
// console.log(display())
// console.log(display(10,'ab'))
// console.log(display(10,20))
// console.log(display('10','20'))

// function loggedInUser(user)
// {
//     return `${user} Just logged in`;
// }
// console.log(loggedInUser("anmol"))
// console.log(loggedInUser())



// const date = new Date();

// // India
// const india = new Intl.DateTimeFormat("en-IN", {
//     timeZone: "Asia/Kolkata",
//     dateStyle: "short",
//     timeStyle: "short"
// }).format(date);

// // USA - New York
// const usa = new Intl.DateTimeFormat("en-US", {
//     timeZone: "America/New_York",
//     dateStyle: "short",
//     timeStyle: "short"
// }).format(date);

// console.log("India:", india);
// console.log("USA:", usa);

// function show()
// {
//     return new Date();
// }

// function display(d=show())
// {
//     console.log(d);
// }
// display()

function    display(x=1,y=x,z=x+y)
{
    console.log(arguments.length)
    return x+y+z;
}
console.log(display())

console.log(display(10))
console.log(display(10,5))