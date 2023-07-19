//number to string 
let number = 42;
let str = "The given number is: " + number; 
console.log(str);
console.log(typeof(str));
 
//string to number
let strNum = "42";
let sum = 10 + Number(strNum);
console.log(sum);
console.log(typeof(sum));

//string to boolean
let strBool = "true";
let boolV = !!(strBool); 
console.log(boolV); 
console.log(typeof(boolV));

//using parseInt and parseFloat
let strInt = "4";
let intV = parseInt(strInt); 
console.log(intV); 
console.log(typeof(intV));

let strFloat = "22.2";
let floatV = parseFloat(strFloat); 
console.log(floatV); 
console.log(typeof(floatV));

//using Number() constructor
let strN = "44";
let conNum = Number(strN); 
console.log(conNum); 
console.log(typeof(conNum));

//using Boolean() constructor
let zero = 0;
let t = Boolean(zero); 
console.log(t); 
console.log(typeof(t));

let notZero = 42;
let t1 = Boolean(notZero); 
console.log(t1); 
console.log(typeof(t1));

//using Unary Operator
// '+' operator
let s = "42";
let n = +s; 
console.log(n); 
console.log(typeof(n));

// '!!' operator
let v = "Shiwam";
let b = !!v; 
console.log(b);
console.log(typeof(b));