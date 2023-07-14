//arithmetic  Operators

var x = 12;
var y = 15;

console.log(y/x);
console.log(y*x);
console.log(y-x);
console.log(y+x);
console.log(y%x);
x++;
console.log(x);
y--;
console.log(y);


//Comparison Operators and Logical

if(x!=y){
    console.log("X is not equal to Y");
}
else if(x>=y){
    console.log("X is greater than Y");
}
else if(x<=y || x<y){
    console.log("X is less than Y")
}
else if(x==y && x===y){
    console.log("X is equal to Y and having same type");
}
else {
    console.log("Not specified at all");
}


//Ternary operator

x < y ? console.log("X is less than Y"):console.log("X is greater than Y"); 

//Bitwise Operator

var a = 5;
var b = 2;
console.log(a&b);  //and
console.log(a|b);  //or
console.log(a^b);  //xor
console.log(a<<b);  //left shift
console.log(a>>b);  //right shift
