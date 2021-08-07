// Arrow Functions are not hoisted and have no arguments
function multiplyByThree(a) {
  return a * 3;
}


console.log(multiplyByThree(5));


// long syntax
const multiplyByThreeArrow = (a) => {
  return a * 3
};


// Short syntax
const multiplyByThreeArrowShort = (a) => a * 3



// this of arrow functions are defined from where they were created
function sayName() {
  console.log(this);
}


const sayNameArrow = () => console.log(this);


const john = { name: 'John', sayNameArrow };
const marry = { name: 'Mariam', sayNameArrow };


john.sayNameArrow();
marry.sayNameArrow();








