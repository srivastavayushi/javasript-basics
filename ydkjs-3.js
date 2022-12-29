// Scope/Closures

var teacher = 'Suzy'

function otherClass(){
  teacher = "Kyle";
  course ="React";
  console.log("Welcome");
}

otherClass();
// the reassignment of variable name inside function changed the global scoped "teacher" variable value hence this will be "Kyle"
teacher;
// This variable is not declared in OtherClass(), hence the browser will declare it in global scope and assign the value "React" to it.
course;

// UNDEFINED VS UNDECLARED - both are entirely different concepts

// Function Expressions
// functions are values that can be assigned to variables or passed inside another functions. Function can be passed around just like primary variables like string, number etc

// anonymous function expression
var clickHandler = function(){
  console.log("anonymous function expression");
}

// Named function expression
var keyHandler = function keyHandler(){
  console.log("Named function expression")
}

// IIFE - Immediately invoked function expression
// due to IIFE we get new block of scope inside it

var teacher = 'Suzy';

(function anotherTeacher(){
  // another block of scope with same variable name as global scope - making teacher variable inside the function block of scope, not overriding global one
  var teacher = 'Ayushi';
  console.log('Inside anotherTeacher function', teacher);
})()

console.log(teacher);

// BLOCK SCOPING WITH LET
var person = 'Tom';
{
  let person = 'Jerry';
  console.log('inside block-let scope',person);
}
console.log(person);

// block scoping inside a function
function formatStr(str){
  // block scope with curly braces
  {
   let prefix, rest;
    prefix = str.slice(0,3);
    rest = str.slice(3);
    str = prefix + rest;
  }
  if(test(str)){
    return str;
  }
  return str.slice(4)
}

// CLOSURE - closure is when a function "remembers" the variables outside of it, even if you pass that function elsewhere. In other words, a closure gives you access to an outer function's scope from an inner function.

// example 1 :
function ask(question){
  setTimeout(function waitASec(){
    console.log(question);
  },100)
}

// waitASec function has closure over question variable
ask("What is Closure");

// example 2 :
function ask(question){
  return function holdYourQuestion(){
    console.log(question);
  }
}

var myQuestion = ask("What is closure");

myQuestion();

// The variable question has global scope and is accessed inside a function with smaller scope - holdYourQuestion();


