// 5 things that make JS weird and awesome
// First Class Functions
// Event-Driven Environment
// Closures
// Scope
// Context

// scope === variable access
// context === this

"use-strict";

// Defined in the root scope or base scope which
// is the window object
var a = 1;

function foo() {
  var b = 2;

  //   console.log(a);
  // Creates a name conflict or scope conflict
  // which means we have declared a variable in
  // the child scope with the exact same name
  // as a variable in the parent scope
  // Not illegal but now we have two a variables
  // in existence, i.e., window.a and a in the
  // child scope, so now we can't access a in the
  // parent scope unless we know how to access
  // the parent object, i.e., window.a
  //   var a = 2;
  //   console.log(a);
  // window only accessible when running in a browser
  //   console.log(window.a);

  // If we remove var, then JS first looks in the
  // scope we're in, i.e, the child scope of the
  // function and JS checks to see if var a has
  // been created yet
  // If it does then a refers to the a created in
  // the current scope
  //   a = 3;
  //   console.log(a);

  // If we never define a in the function, then JS
  // looks in the parent scope and finds the a
  // that was declared there, so the a in the
  // function now points to the a in the parent
  // scope

  // If a is not defined in the parent scope, then
  // JS keeps looking up the parent scopes until
  // it gets to the window object and if there is
  // no window.a, then JS creates a on the window
  // object
  // This is known as polluting the root scope, so
  // everything across the application has access
  // to it
  // Polluting the root scope leads to unwanted
  // effects and messy code
  // If you use "use-strict" it prevents you from
  // polluting the root scope and will produce a
  // ReferenceError saying a is not defined

  var a = 2;
  console.log(a);
}

function bar() {
  a = 3;
  console.log(a);
}

foo();
bar();
console.log(a);
// Results in a ReferenceError since b is not
// defined in the root scope it's defined in the
// child scope of the function
// console.log(b);
