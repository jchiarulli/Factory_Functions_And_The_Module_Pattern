// Scope and this
// Each Scope binds a different value of this
// depending on how the function is invoked
// Want to understand how this differs when its
// invoked
// By default this refers to the outer most global
// object, i.e., the window
// We can show how invoking functions in different
// ways binds the this value differently:

var myFunction = function () {
  console.log(this); // this = global, [object Windoew]
};
myFunction();

var myObject = {};
myObject.myMethod = function () {
  console.log(this); // this = Object { myOnject }
};

var nav = document.querySelector(".nav"); // <nav class="nav">
var toggleNav = function () {
  console.log(this); // this = <nav> element
  setTimeout(function () {
    console.log(this); // [object Window]
  }, 1000);
};
nav.addEventListener("click", toggleNav, false);

// Above we've created a new Scope which is not
// invoked from our event handler, so it defaults
// to the window object as expected
// Several ways to access the proper this value
// which isn't affected by the new Scope
// We can cache a reference to the this value
// using a that and refer to the Lexical binding

var nav1 = document.querySelector(".nav"); // <nav class="nav">
var toggleNav1 = function () {
  console.log(this); // this = <nav> element
  setTimeout(function () {
    console.log(that); // <nav> element
  }, 1000);
};
nav1.addEventListener("click", toggleNav, false);

// Trick to be able to use the proper this value
// and resolve problems with newly created Scope
