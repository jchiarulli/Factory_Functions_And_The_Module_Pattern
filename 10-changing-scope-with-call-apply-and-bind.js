// Changing Scope with .call(), .apply(), and
// .bind()
// Sometimes you need to manipulate the Scopes of
// JS depending on what you're trying to do
// Example of how to change the Scope when
// looping:

var links = document.querySelectorAll("nav li");
// var links = [1, 2, 3];
for (var i = 0; i < links.length; i++) {
  console.log(this); // [object Window]
}

// The this value doesn't refer to our elements
// we're not invoking anything or changing the
// Scope
// So, how can we appear to change the Scope?
// We can change the context of how th function
// is called

// The .call() and .apply() methods allow us to
// pass in a Scope to a function which binds the
// correct this value
// Let's manipulate the aboce function to make it
// so that our this value is each element in the
// array:
var links1 = document.querySelectorAll("nav li");
// var links = [1, 2, 3];
for (var i = 0; i < links1.length; i++) {
  (function () {
    console.log(this);
  }.call(links1[i]));
}
// Above we're passing in the current element in
// the Array iteration, links1[i] which changes
// the Scope of the function so that the this
// value becomes that iterated element
// We can then use the this binding if we wanted
// We can use either .call() or .apply() to change
// the Scope
// .call(scope, arg1, arg2, arg3) takes individual
// arguments, where .apply(scope, [arg1, arg2])
// takes an Array of arguments

// Important to remember that using .call() or
// .apply() actually invokes the function, so
// instead of doing this:
// myFunction(); // invoke myFunction
// You'll let .call() handle it and chain the
// method:
// myFunction.call(scope); // invoke myFunction using .call()

// Unlike the above using .bind() doesn't invoke
// a function, it merely binds the values the
// before the function is invoked
// We can't pass parameters into function
// references, i.e.,
// works
// nav.addEventListener("click", toggleNav, false);

// will invoke the function immediately
// nav.addEventListener("click", toggleNav(arg1, arg2), false);

// To fix this we can create a new function inside
// it:
// nav.addEventListener("click", function() {
//     toggleNav(arg1, arg2);
// }, false);

// However, doing the above changes Scope and
// we're creating a needless function again which
// can be costly if we're inside a loop and
// binding event listeners
// This is where .bind() comes in handy since we
// can pass arguments but the functions are not
// called
// nav.addEventListener('click', toggleNav.bind(scope, arg1, arg2), false);

// The function isn't invoked and the Scope can be
// changed if needed, but arguments are sat
// waiting to be passed in
