// Factory function pattern is similar to
// constructors, but instead of using new to
// create an object, factory functions simply set
// up and return the new object when you call the
// function

// Factory function example
const personFactory = (name, age) => {
  const sayHello = () => console.log("hello!");
  // If you're creating an object where you're
  // referring to a variable that has the exact
  // same name as the object property is can
  // be condensed
  return { name, age, sayHello };
};

const jeff = personFactory("jeff", 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

// Constructor example
const Person = function (name, age) {
  this.sayHello = () => console.log("hello!");
  this.name = name;
  this.age = age;
};

const samson = new Person("samson", 27);

const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({ name, color, number, food });
// { name: 'Maynard', color: 'red', number: 34, food: 'rice' }
