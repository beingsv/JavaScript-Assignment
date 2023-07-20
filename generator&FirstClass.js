//generator function: syntax <function* function name>
//this function allow us to hold and resume the function execution.
function* incre(){
    let x =0;
    while(true){
        yield x++;
        console.log("Exited");
    }
}
const i = incre();
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);


//first class functions:
//we can assign a function to a variable
let f = function sub(){
    let a = 10;
    let b = 5;
    return a - b;
}
let m = f();
console.log(m);

//can pass as a argument to other function $ allowing to use power of higher-order functions
function add(a, b) {
    return a + b;
}

function doOps(op, a, b) {
    return op(a, b);
}
  
console.log(doOps(add, 3, 5));
  
//can be stored in arrays, objects, or other data structures
const operations = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
};
  
console.log(operations.add(3, 2)); 
console.log(operations.subtract(7, 4));