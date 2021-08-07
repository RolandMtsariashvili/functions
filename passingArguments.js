function functionAcceptionArgument(a, b, c) {
  console.log(a, b, c);
}


functionAcceptionArgument(1, 2, 3, 6, 12) // all the arguments except first three will be ignored




function functionAcceptionArgument2(a, b, c) {
    console.log();
  }
  
  
  functionAcceptionArgument(1) // all arguments except a will be undefined


// 




// primitive values are passed as values
const firstArgument = 5;
const secondArgument = 12;


function changePrimitiveArguments(first, second) {
  console.log(first, second);
  first = 10;
  second = 24;
  console.log(first, second);
}


changePrimitiveArguments(firstArgument, secondArgument);

console.log(firstArgument, secondArgument);



// Objects - are passed by reference
const obj = {
  size: 5,
  color: 'grey',
}


function changeObject(obj) {
  console.log(obj);
  obj.size = 15; // Changed The value of passed object.
  console.log(obj);
}

changeObject(obj);  // { size: 15, color: 'grey' }
console.log(obj)



// arguments and args
function argumentsProperty (a, b, c) {   // arguments property is not an array!!
  console.log(arguments[0]) // hello
  console.log(arguments[1]) // world
  console.log(arguments[2]) // asdasds
  console.log(arguments.callee) // function itself
  console.log(arguments.length) // 3
}


argumentsProperty('hello', 'world', 'asdasds')



function argsRestOperator(...args) {  // args variable is an array!
  console.log(args) // ['hello', 'world']
}

argsRestOperator('hello', 'world');




function sumOfAllArgument(...args) {
  let result = 0;
  for (let arg of args) {
    result += arg;
  }

  console.log(result)
}


sumOfAllArgument(1, 5, 10);