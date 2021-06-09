// What is Global Scope
// Before we write a line of JS we're in what is
// called the Global Scope
// If we declare a variable it's defined globally

// global scop
var name = "Todd";

// Understanding Global Scope prevents problems
// like namespace clashes

// Global Scope is not inherently bad, we need it
// to create Modules/APIs that are accessible
// across scopes

// Accesses jQuery in the Global Scope
// We can refer to this access as the Namespace
// jQuery(".myClass")

// Namespace is sometimes an interchangeable word
// for Scope, but usually refers to the highest
// level Scope

// Above jQuery is in the Global Scope & is also
// our Namespace
// The jQuery Namespace is defined in the Global
// Scope which acts as a Namespace for the jQuery
// library because everything inside of it becomes
// a descenddent of that Namespace
