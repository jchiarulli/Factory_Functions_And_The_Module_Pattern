// How let and const are scoped in JS
// Couple new ways to declare variables in ES6
// that help us out with scoping

// var variables can be redefined or updated
var width = 100;
console.log(width); // 100
width = 200;
console.log(width); // 200

// Can also put a var in front of width = 200;
// JS won't through an erro for creating the same
// variable name twice in the same scope because
// var variables can be updated or redefined

// Also need to remember how var variables are
// scoped
// Scoping essentially means, "Where are these
// variables available to me?"
// In the case of var variables, they're function
// scope, which means that they're only available
// inside the function that they're created in
// However, if they're not declared in a function,
// then they're globally scoped, and they're
// available in the whole window

function setWidth() {
  var width = 100;
  console.log(width);
}
setWidth();

// The above code works since width is available
// inside of the function

function setWidth() {
  var width1 = 100;
  console.log(width1);
}
setWidth();
// console.log(width1); // error, width is not defined

// The above code doesn't work since width is only
// available to the scope of the function it's
// been declared in

// If you do want to globally scope width we need
// to decalre it outside the function and update
// it inside the function
var width2;
function setWidth() {
  width2 = 100;
  console.log(width2);
}
setWidth();
console.log(width2);

// Generally, want to keep variable inside of
// the function
// If you need something outside of a function,
// then you'll want to return it and store it in
// a variable

var age = 100;
if (age > 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old!`);
}

// In the above code var dogYears is just a
// temporary variable that we just needed in order
// to store the calculation of something and then
// stick it into a string to be logged to the
// console
// If you go to the browser console and call
// dogYears, you'll see that it's leaked outside
// of the if statement and it's now a global
// variable that lives on the window object
// Even though dogYears was a temporary variable
// that was only needed inside of the if statement
// since var variables are function scoped and
// there's no function here, it's going to be
// globally scoped, i.e., scoped to the window
// object

// Benefit of let and const is they're block
// scoped instead of being scoped to a function
// What is a block scope?
// Example:
if (age > 12) {
  var dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old!`);
}

// Any time you see curly brackets that's a block
// Functions are also blocks, so let and const
// are also scoped to functions
// But inside of that function or if inside of
// some other element you have, it will be scoped
// to the closest set of curly brackets

var age = 100;
if (age > 12) {
  let dogYears = age * 7;
  console.log(`You are ${dogYears} dog years old!`);
}
console.log(dogYears); // error because it's scoped only to the above block
