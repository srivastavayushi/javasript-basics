// Three pillars of Javascript
  // 1. types/coercion
  // 2. scopes/closures
  // 3. this / prototypes

var v;
console.log(typeof v); // declared and unassigned
console.log(typeof doesntExist); // undeclared

var nullType = null;
console.log(typeof(nullType));

v = function(){};
console.log(typeof v);

v = [1,2.3];
console.log(typeof v);

// Nan - indicates we have invalid numeric operation of some sort
v = "Javascript is the best";
var something = v/2;
something;
Number.isNaN(something);
Number.isNaN(v);

// Use new() - instantiate new instances 
// - Object()
// - Array()
// - Function()
// - Date()
// - RegExp()
// - Error()

// Don't use new
// - String()
// - Number()
// - Boolean()

var yesterday = new Date("December 19, 2022");
yesterday.toUTCString(); // use new to make object representations

var myGPA = String(8.5); // use new when we call it to do type conversion
myGPA;


// COERCION : TYPE CONVERSION
// '+' operator is overloaded : if string + number : it will always convert the output to string
// Number(string form of number such as "17") --> converted to numeric form of number -> 17

// BOOLEAN COERCION

// These if converted to boolean be :
// false : " ", null, NaN, false, undefined, 0 , -0
// true : anything else

// comparison operators autmatically convert operands to numbers

// == -> allows coercion (types different)
// === -> doesnt allow coercion (types same)
