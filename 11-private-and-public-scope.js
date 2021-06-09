// Private and Public Scope
// In many programming languages, you'll hear
// about public and private Scope
// In JS there is no such thing
// We can however emulate public and private Scope
// using Closures

// By using JS design patterns such as the Module
// pattern for example, we can create public and
// private Scope
// To do this we can wrap our functions inside
// a function
// As we've learned functions create Scope which
// keeps things out of Global Scope:
(function () {
  // private scope inside here
})();

// We might then add a few functions for use in
// our app:
(function () {
  var myFunction = function () {
    // do some stuff here
  };
})();

// But when we come to calling our function, it
// would be out of Scope:
// myFunction(); // Uncaught ReferenceError: myFunction is not defined

// We've created private Scope
// But what if we want the function to be public?
// There's a great pattern called the Module
// Pattern (and Revealing Module Pattern) which
// allows us to Scope our functions correctly
// using private and public Scope and an object
// Here we grab my Global Namespace called Module
// which contains all of the relevant code for
// that module:
// define module
var Module = (function () {
  return {
    myMethod: function () {
      console.log("myMethod has been called.");
    },
  };
})();

// call module + methods
Module.myMethod();

// The return statement here is what returns
// our public methods which are accessible in the
// Global Scope - but are Namespaced
// This means our Module takes care of our
// Namespace and can contain as many methods as
// we want
// We can extend the Module as we wish:
// define module
var Module2 = (function () {
  return {
    myMethod: function () {
      console.log("myMethod has been called.");
    },
    someOtherMethod: function () {},
  };
})();

// call module + methods
Module2.myMethod();
Module2.someOtherMethod();

// What about private methods?
// Where a lot of developers go wrong and pollute
// the global namespace by dumping all their
// functions in the Global Scope
// Functions that help our code work don't need
// to be in the Global Scope only the API calls
// do - things that need to be accessed globally
// in order to work
// Here's how we can create private Scope by not
// returning functions:
var Module3 = (function () {
  var privateMethod = function () {};
  return {
    publicMethod: function () {},
  };
})();

// Above the publicMethod can be called, but
// the privateMethod cannot since it's privately
// scoped
// These privately scoped functions are things
// like helpers, addClass, removeClass, Ajax/XHR
// calls, Arrays, Objects, anything you can
// think of

// Anything in the same Scope has access to
// anything in the same Scope even after the
// function has been returned
// Which means our public methods have access
// to our private ones, so they can still interact
// but are unaccessible in the Global Scope
var Module4 = (function () {
  var privateMethod = function () {};
  return {
    publicMethod: function () {
      // has access to `privateMethod`, we can call it:
      // privateMethod();
    },
  };
})();

// Allows a very powerful level of interactivity
// as well as code security
// Very important in JS to ensure security which
// is why we can't afford to put all functions
// in the Global Scope as they'll be publicly
// available making them open to vulnerable
// attacks

var Module5 = (function () {
  var myModule = {};
  var privateMethod = function () {};
  myModule.publicMethod = function () {};
  myModule.anotherPublicMethod = function () {};
  return myModule; // returns the Object with public methods
})();

// usage
Module5.publicMethod();

// Naming convention is to begin private methods
// with an underscore which visually helps
// differentiate between public and private:
var Module6 = (function () {
  var _privateMethod = function () {};
  var publicMethod = function () {};
})();

// Helps us when returning an anonymous Object
// which the Module can use in Object fashion as
// we can simply assign the function references:
var Module7 = (function () {
  var _privateMethod = function () {};
  var publicMethod = function () {};
  var anotherPublicMethod = function () {};
  return {
    publicMethod: publicMethod,
    anotherPublicMethod: anotherPublicMethod,
  };
})();

Module7.publicMethod();
Module7.anotherPublicMethod();
