// Lexical Scope
// Whenever you see a function within another
// function, the inner function has access to the
// scope in the outer function, this is called
// Lexical Scope or Closure - also referred to as
// Static Scope

// Example:
// Scope A
var myFunction = function () {
  // Scope B
  var name = "Todd"; // defined in Scope B
  var myOtherFunction = function () {
    // Scope C: name is accessible here!
    console.log("My name is " + name);
  };
  console.log(name);
  myOtherFunction(); // call function
};

// Notice myOtherFunction isn't being called
// here, it's simply defined
// Its order of call also has an effect on how
// the scoped variables react

// Here, we've defined myOtherFunction1 and
// called it under the console statement

var myFunction1 = function () {
  var name = "Todd";
  var myOtherFunction1 = function () {
    console.log("My name is " + name);
  };
  console.log(name);
  myOtherFunction1(); // call function
};

// Will then log out:
// Todd
// My name is Todd
myFunction1();

// In Lexical Scope any variables, objects, or
// functions defined in its parent scope are
// available in the scope chain
// Example:
var name = "Todd";
var scope1 = function () {
  // name is available here
  var scope2 = function () {
    // name is available here too
    var scope3 = function () {
      // name is also available here!
    };
  };
};

// Important to remember that Lexical Scope
// doesn't work backwards
// name = undefined
var scope1 = function () {
  // name = undefined
  var scope2 = function () {
    var scope3 = function () {
      var name = "Todd"; // locally scoped
    };
  };
};

// We can always return a reference to name, but
// never the value itself
