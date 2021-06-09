// Scope Chain
// Scope Chains establish the Scope for a given
// function
// Each function defined has its own nested Scope
// Any function defined within another function
// has a Local Scope which is linked to the outer
// function
// This link is called the Chain
// It's always the position in the code that
// defines the Scope
// When resolving a variable, JS starts at the
// innermost scope and searches outwards until it
// finds the variable, object, or function it was
// looking for

// Closures
// Closures tie in very closely with Lexical Scope
// A better example of how the Closure side of
// things works, can be seen when returning
// a function reference - a more practical usuage
// Inside our scope we can return things so that
// they're available in the parent scope:
var sayHello = function (name) {
  var text = "Hello, " + name;
  return function () {
    console.log(text);
  };
};

// The Closure concept we've used here makes our
// Scope inside sayHello inaccessible to the
// public scope
// Calling the function alone will do nothing
// as it returns a function:
sayHello("Todd"); // nothing happens, no errors, just silence...

// The function returns a function, which means
// it needs assignment, and then calling:
var helloTodd = sayHello("Todd");
helloTodd(); // will call the Closure and log "Hello, Todd"

// Actually, you can "call it", but this will call
// the Closure:
sayHello("Bob")();

// AngularJS uses the above technique for its
// $compile method, where you pass the current
// scope reference into the closure:
// $compile(template)(scope);

// We could guess that their code would
// (over-simplified) look like this:
var $compile = function (template) {
  // some magic stuff here
  // scope is out of scope, though...
  return function (scope) {
    // access to template and scope to do magic with too
  };
};

// A function doesn't have to return in order
// to be called a Closure though
// Simply accessing variables outside of the
// immediate Lexical Scope creates a Closure
