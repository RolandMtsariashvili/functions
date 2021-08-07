// Function + lexical environment (lexical scope)
function saySecretName(name) {
  const secretName = name;  // Cloisured this variable

  return function() {
    console.log(secretName);
  }
}


const sayName = saySecretName('mike');
sayName(); // will always log mike
sayName();  

// Arguments are cloisuring too!

function wrapperFunc(greeting) {

  return function(somethingToGreet) {
    console.log(greeting, somethingToGreet)
  }
}


const greetWithHello = wrapperFunc('Hello');
greetWithHello('world') //  hello world
greetWithHello('universe')  // hello universe


