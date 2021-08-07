function sayName(name) {
  console.log(`Hello, ${name}`)
}


function countDecorator(func) {  
  let counter = 0;
  return function(...args) { // Rest Operator  john' => 
    counter += 1;
    console.log(counter)
    func(...args);  // Spread operator  args = ['john'] => 'john'
  }
}


const decoratedSayName = countDecorator(sayName);
decoratedSayName('john');
decoratedSayName('rebecca');
decoratedSayName('sam');