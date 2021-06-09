# Factory Functions and the Module Pattern

## What's Wrong with Constructors?

- Aren't careful it's easy to introduce bugs into your code
- Look just like regular functions but they don't behave like regular functions at all
- If you try to use a constructor function without the new keyword, then your program won't work as expected, but it won't produce error messages that are easy to trace

## Some Pros of Constructors

- Common in other programming languages
- Common in many online tutorials

## Learning Outcomes

- Describe common bugs you might run into using constructors
- Write a factory method that returns an object
- Explain how scope works in JS (pay attention to what ES6 has changed)
- Explain what Closure is and how it impacts private functions & variables
- Describe how private functions & variables are useful
- Use Inheritance in objects using the factory pattern
- Explain the module pattern
- Describe IIFE. What does it stand for?
- Briefly explain namespacing and how it's useful
