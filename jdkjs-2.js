// Three pillars of Javascript
  // 1. types/coercion
  // 2. scopes/closures
  // 3. this/prototypes

var v;
console.log("type of v", typeof v); // declared and unassigned
console.log("type of doesntExist",typeof doesntExist); // undeclared

var nullType = null;
console.log("type of nullType",typeof(nullType));

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

// == -> allows coercion (types different can result in true since type is converted)
// === -> doesnt allow coercion (types same since type cannot be converted it should result error if comparison entities types are different)

// sometimes == is more convinient than ===
// in the below example user only cares about if workshop1 topic and workshop2 topic is empty or not , he is not concerned wether the type if null or undefined (both are empty for him)


console.log("Type of null", typeof null);
console.log("Type of undefined", typeof undefined);

var workshop1 = { topic: null}
var workshop2 = {}

if((workshop1.topic === null || workshop1.topic === undefined) && (workshop2.topic === null || workshop2.topic === undefined)){
  console.log("Workshop topic doesnt exist with ===");
}

// == checks null and undefined coercively to each other
if(workshop1.topic == null && workshop2.topic == null){
  console.log("Workshop topic doesnt exisit with == ")
}
