// The Module Pattern
// Note: ES6 introduced a new feature in JS called
// modules
// These are essentially a syntax for importing
// and exporting code between different JS files
// They're very powerful
// Not what we're talking about here though

// Modules are very similar to factory functions
// The main difference is how they're created:
// Example:
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476

// The concepts are exactly the same as the
// factory function
// However, instead of creating a factory that we
// can use to over and over again to create
// multiple objects, the module pattern wraps the
// factory in an IIFE (immediatley invoked
// function expression)

// Concept is: write a function, wrap it in
// paraentheses, and then immediately call the
// function by sdding () to the end of it

// In the calculator example the function inside
// the IIFE is a factory function, but we can
// just go ahead and assign the object to the
// variable calculator since we aren't going to
// need to be making lots of calculators we only
// need one
// Just like the factory example we can have as
// many private functions and variables as we want
// and they stay neatly organized tucked away
// inside of our module only exposing the
// functions we actually want to use in our
// program

// A useful side-effect of encapsulating the inner
// workings of our programs into objects is
// namespacing
// Namespacing is a technique that is used to
// avoid naming collisions in our programs
// For example, it's easy to imagine scenarios
// where you could write multiple functions with
// the same name
// In our calculator example what if we has a
// function that added things to our HTML display
// and a function that added numbers and operators
// to our stack as the users input them?
// It's conceivable that we would want to call all
// three of these functions with add which of
// course trouble in our program
// If all of them were nicely encapsulated inside
// of an object then we would have no trouble:
// calculator.add(), displayController.add(),
// operatorStack.add()
