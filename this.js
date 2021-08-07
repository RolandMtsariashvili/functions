function showMeThis() {
  console.log(this); // if 'use strict' - undefined, else - window or global depending on environment
}


showMeThis();




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
// this-  is determined when the function is executed. 
objectOne.sayMyName();   // max
objectTwo.sayMyName();   // sara



const objectWithDeepThis = {
  radius: 5,
  shape: 'circle',
  regularFunction: function() {
    console.log(this);
    const rightContext = this; // we have to save context to a variable so innerfunction would receive the context of objectWithDeepThis

    const innerfunction = function () {
      console.log(rightContext)
    };

    innerfunction();
  }
}

// this - context of execution

objectWithDeepThis.regularFunction();






const objectWithDeepThis = {
  radius: 12,
  shape: 'circle',
  regularMethod: function() {
    console.log(this);

    const innerFunction = () => console.log(this); // arrow function allows to take context from the parent without reassigning this

    innerFunction();
  }
}

objectWithDeepThis.regularMethod();

