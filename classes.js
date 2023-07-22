//Constructor:
class Car {
    constructor(color) {
        this.color = color;
    }
  
    changing(newColor) {
        this.color = newColor;
    }
  
    pd() {
        console.log(`Car color: ${this.color}`);
    }
}
  
const cars = [
    new Car('Blue'),
    new Car('Purple'),
    new Car('White')
];
  
console.log("Initial colors:");
cars.forEach(car => car.pd()); 
  
cars[0].changing('Yellow');
cars[1].changing('Orange');
cars[2].changing('Red');
  
console.log("Updated colors:");
cars.forEach(car => car.pd());



//Inheritance:

// Parent class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
  
    makeSound() {
        console.log("Generic animal sound!");
    }
}
  
// Child class 
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");  //to call constructor of a parent class we use super
        this.breed = breed;
    }
  
    makeSound() {
        console.log("Woof!");
    }
  
    fetch() {
        console.log(`${this.name} is fetching the ball.`);
    }
}

const dog = new Dog("Thugs", "Golden Retriever");
dog.makeSound();
dog.fetch();

console.log(dog.name); 
console.log(dog.species);
console.log(dog.breed);


//Instance Method: 
class Dogs {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
    bark() {
        console.log(`${this.name} says woof!`);
    }
}
  
const dog1 = new Dogs('Thugs', 3);
const dog2 = new Dogs('Cheeku', 5);
  
dog1.bark(); 
dog2.bark(); 
  

//Static Methods:
class Sumup{
    static adding(a, b){
        return a + b;
    }
    static multipling(a, b){
        return a * b;
    }
}
console.log(Sumup.adding(2, 3));
console.log(Sumup.multipling(2, 3));


//Getter and Setter Method:
class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
    get name() {
        return this._name;
    }
  
    get age() {
        return this._age;
    }
  
    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
                console.error("Age cannot be negative.");
        }
    }
}
const insaan = new Person("Shiwam", 23);

console.log(insaan.name); 
console.log(insaan.age);

insaan.age = 35; 
console.log(insaan.age); 

insaan.age = -5;


//Prototype:
class Cars {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
}
  
Cars.prototype.getFullName = function() {
    return `${this.brand} ${this.model}`;
};
  
const car1 = new Cars('Toyota', 'Supra');
const car2 = new Cars('Honda', 'Civic');
  
console.log(car1.getFullName()); 
console.log(car2.getFullName());


