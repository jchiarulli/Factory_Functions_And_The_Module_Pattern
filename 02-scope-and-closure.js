// Incredibly important concept: Closure
// Before we can make sense of closure we need
// to understand Scope
// Scope refers to where things like variables
// and functions can be used in your code

let a = 17;

const func = (x) => {
  let a = x; // Causes 17 to be logged
  //   a = x; // Causes 99 to be logged
};

func(99);

console.log(a); // ???????

// Using let a = x causes 17 to be logged
// It's not 99 since the outer variable a is not
// redefined instead a new a is created inside the
// scope of the function
