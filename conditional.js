var x=19;
console.log(x);
if (x<10){
    console.log(x + " less then 10");
}
else{
    console.log(x + " greater than 10");
}


var x=2
for(i=1;  i<=10; i++){
    console.log(x + "*" + i + "=" + x*i)
}



var h = prompt("hour=")
var week = prompt("week day=")
if((h<=10 || h>=15) && (week=="mon"||week=="tue"||week=="wed"||week=="thur"||week=="fri")){
    console.log("office closed")
}
else{
    console.log("office opened")
}


var num1=20;
var num2=15;
var num3=30;
var num4=15;

if(num1==num2||num2==num3||num3==num4){
    console.log("any two number is equal");
}
else{
    console.log("all numbers are different");
}


var a = "4";
console.log(typeof(a));

b = Number(a);
console.log(typeof(b));

