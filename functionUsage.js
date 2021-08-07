// Regular functions
function sumTwoArguments(a, b) {
  console.log(a + b);
}

sumTwoArguments(5, 3);




// Methods
const objectWithMethod = {
  a: 5,
  b: 3,
  sum: function() {    // Method
    console.log(this.a + this.b);
  },
};

objectWithMethod.sum();




// // Function-constructors  
function FunctionConstructorFunction(a, b) {
  this.a = a;
  this.b = b;
  this.sum = function() {
    console.log(this.a + this.b);
  };
}

const instanceOfFunctionConstructor = new FunctionConstructorFunction(3, 5);
instanceOfFunctionConstructor.sum();




// // New function syntax
const neverUsedSyntax = new Function('a', 'b', 'c', 'd', 'console.log(a + b + c + d);');
neverUsedSyntax(5, 5, 5, 5);




// // !important: functions are objects.


// We can put function in an array
function sumTwoArguments(a, b) {
  console.log(a + b);
}

sumTwoArguments(5, 3);

const arrayOfFunctions = [sumTwoArguments]
arrayOfFunctions[0]();



// Or we can define a property of a function since its an object
const someObject = {}
someObject.someProperty = 'property';


function someFunc() {
  console.log('hello');
}


someFunc.someProperty = 'something';
console.log(someFunc.someProperty); // something




// CallBack and Higher Order Function
function sayName() {
  console.log('krista');
}

// Higher-order function is a function which takes function as an argument or returns it
function HigherOrderFunction(callbackFunction) {  // Every function which is passed as an argument is named callback function
  callbackFunction();
}

sayMyName()
HigherOrderFunction(sayName);







// Useful example
function sayName(name) {
  console.log('hello, ', name);
}

function countCalls(func) {    // Higher order function.
  countCalls.calledTimes = 0;

  return function(name) {   // anonymous function is a function which doesnt really have name
    countCalls.calledTimes += 1;
    console.log(countCalls.calledTimes);
    return func(name);
  }
}


const sayNameWithCountCalls = countCalls(sayName);
sayNameWithCountCalls('krista');
sayNameWithCountCalls('Mariam');
sayNameWithCountCalls('Nick');
