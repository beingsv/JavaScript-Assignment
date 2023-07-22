//normal function declaration
function add(){
    let a = 5;
    let b = 10;
    console.log( a + b );
}
add();

//declaring a function as a variable
let f = function sub(){
    let a = 10;
    let b = 5;
    return a - b;
}
let m = f();
console.log(m);

//arrow function
const mul = (a ,b) => a * b;
console.log(mul(10, 20));

//immediately calling function
(function () {
    const name = 'Shiwam';
    console.log('Hello, Its ' + name + 'Vishwakarma');
})(); 

//callback
function callingFunction(call) {
    console.log('CallBack will execute below: ');
    call();
  }
  
  function myCB() {
    console.log('Callback function!');
  }
  callingFunction(myCB);