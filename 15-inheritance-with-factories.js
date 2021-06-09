// Inheritance with Factories
// Look into the constructor lesson which went
// over the concept of prototypes and inheritance
// or giving access to methods and properties of
// another object
// There are a few easy ways to accomplish this
// while using factories
// Example:
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const { sayName } = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return { sayName, doSomethingNerdy };
};

const jeff = Nerd("jeff");

jeff.sayName(); // my name is jeff
jeff.doSomethingNerdy(); // nerd stuff

// This pattern is great because it allows you to
// pick and choose which functions you want to
// include in your new object
// If you want to go ahead and lump ALL of another
// object in, you can certainly do that as well
// with Object.assign
// Example:
const Nerd1 = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return Object.assign({}, prototype, { doSomethingNerdy });
};

// Visit the docs on moxilla for more info about
// Object.assign
