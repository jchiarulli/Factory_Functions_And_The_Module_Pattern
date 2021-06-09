// Private Variables and Functions
const FactoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString()}----`);
  return { printString };
};

const taco = FactoryFunction("taco");

// printString(); // ERROR!!
// capitalizeString(); // ERROR!!
// taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"

// Because of the concept of Scope neither of the
// functions created inside of the FactoryFunction
// can be accessed outside of the function itself
// which is why lines 10, 11, and 12 fail
// The only way to use way to use either of those
// functions is to return them in the object like
// in line 5
// This is why we can call taco.printString() but
// not taco.capitalizeString()
// The big deal here is that even though we can't
// access the capitilizeString() function
// printString() can which is known as a Closure

// The concept of Closure is the idea that
// functions retain their Scope even if they are
// passed around and called outside of that Scope
// Here, printString() has access to everything
// inside of FactoryFunction even if it gets
// called outside of that function

// Another example:
const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3

// Here, counterCreator initializes a local
// variable count and then returns a function
// To use that function we have to assign it to
// a variable see line 44
// Then every time we run the function it
// console.logs count and increments it
// The function counter is a Closure
// It has access to the variable count and can
// both print and increment it, but there is no
// other way for our program to access that
// variable

// In the context of factory functions, Closures
// allow us to create private variables and
// functions
// Private functions are functions that are used
// in the workings of our objects that are not
// intended to be used elsewhere in our program
// In other words, even though our objects might
// only do one or two things, we're free to split
// our functions up as much as we want (allowing
// for cleaner, easier to read code) and only
// export the functions that the rest of the
// program is going to use
// Using this terminology with our printString
// example capitalizeString is a private function
// and printString is public

// Private functions are very useful and should
// be used as often as possible
// For every bit of functionality that you need
// for your program there are likely to be
// several supporting functions that do NOT need
// to be used in your program as a whole
// Tucking these away and making them inaccessible
// makes your code easier to refactor, easier to
// test, and easier to reson about for you and
// anyone else that wants to use your objects
