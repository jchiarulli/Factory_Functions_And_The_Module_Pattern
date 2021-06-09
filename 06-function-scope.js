// Function Scope
// Prior to ES6:
// All scopes in JavaScript are created with
// Function Scope only, they aren’t created by
// for or while loops or expression statements
// like if or switch.
// New functions = new scope - that’s the rule
// Now with ES6 all scopes in JavaScript are not
// only created with the Function Scope

// Scope A
var myFunction = function () {
  // Scope B
  var myFunction = function () {
    // Scope C
  };
};
