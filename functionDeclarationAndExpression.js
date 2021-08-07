// Function Declaration  and Function Expression


console.log(multiplyByThree(5)); // can be called before declaration


function multiplyByThree(multiplier) { // Hoisted
  return 3 * multiplier
}






// Function Expression
console.log(multiplyByThree(5)) // will cause an error because function expression is not hoisted


const multiplyByThree = function (multiplier) {
  return 3 * multiplier;
}






// someFunction()




// Named Function Expressio

const getFibonacci = function finobacci(n) {
  if (n <= 1) {
    return 1;
  }

  return finobacci(n - 1) + finobacci(n - 1);
}


finobacci(5); // will cause an error because inner name can be called only from the inside of a function
getFibonacci(5) // will work correctly



// console.log(getFibonacci(4))
// finobacci();