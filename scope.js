// Scope.

// Scope is a place in our code, where the variable is seen

function testScope() {
  const someVar = 5;
  console.log(someVar) // 5
}


console.log(someVar); // error, someVare doesnt exists because it was defined inside of a different scope  





// console.log(someVar)



// Static (Lexical) Scope  
const car = { model: '3 series', engine: '335' };

function tellAboutCar() {
  console.log(car);  // will log car from global scope, since scope is defined at the moment of its creation
}

function tellAboutMyCar() {
  const car = { model: '5 series', engine: '550' };
  tellAboutCar();
}


tellAboutCar();  



// // Dynamic scope
function sayMyName() {
  console.log(this.name); // this - is Object before dot.
}

const objectOne = {
  name: 'Max',
  sayMyName,
};

const objectTwo = {
  name: 'sara',
  sayMyName
};


objectOne.sayMyName();   // this-  is determined when the function is executed. 
objectTwo.sayMyName();
