// What is Local Scope?
// Refers to any Scope defined past the Global
// Scope
// Typically one Global Scope, and each function
// defined has its own (nested) Local Scope
// Any function defined within another function
// has a Local Scope which is lined to the outer
// function

// Scope A: Global Scope out here
var myFunction = function () {
  // Scope B: Local Scope in here
};

// Any locally scoped items are not visible in the
// Global Scope - unless exposed
// If we define functions or variables within a
// new scope, it's inaccessible outside of that
// current scope
// Example:
var myFunction = function () {
  var name = "Todd";
  console.log(name); // Todd
};

// Uncaught ReferenceError: name is not defined
// console.log(name);

// The variable name is locally scoped, it's not
// exposed to the parent scope and therefore
// is undefined when attempting to access it in
// the Global Scope
