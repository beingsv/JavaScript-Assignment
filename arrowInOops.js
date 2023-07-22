
class MyClass {
    constructor() {
      this.name = "Vishwakarma";
    }
  
    sayHello() {
        
      setTimeout(function () {
        console.log("Hello, " + this.name); //not
      }, 3000);
  
      setTimeout(() => {
        console.log("Hello, " + this.name); //yes
      }, 5000);
    }
}
  
const myObj = new MyClass();
myObj.sayHello();


// class MyClass {
//     constructor() {
//       this.name = "Shiwam";
//     }
  
//     sayHello() {
//       console.log("Hello, " + this.name);
//     }
  
//     sayGoodbye = () => {
//       console.log("Goodbye, " + this.name);
//     };
//   }
  
//   const myObj = new MyClass();
//   myObj.sayHello();    
//   myObj.sayGoodbye();  


// const regularPerson = {
// name: 'Shiwam',
// sayHello: function() {
//         console.log('Hello, my name is ' + this.name);
//     }
// };
// // Arrow function as a method
// // var names = "Vishwakarma";
// this.name = 'Shiwam'
// const arrowPerson = {
// name: 'Shiwam',
// sayHello: () => {
//         console.log('Hello, my name is ' + this.name); 
//     }
// };
// regularPerson.sayHello();
// arrowPerson.sayHello();
  