// ?Object creation

// *Method 1

const obj1 = Object.create({}); //creates a normal object
obj1.name = "znjs"; //add parameter to object
obj1.number = 234;

console.log(obj1); //{ name: 'znjs', number: 234 }

const obj2 = Object.create(null);
console.log(obj2); //[Object: null prototype] {}
obj2.name = "znjs";
obj2.number = 345;
console.log(obj2); //[Object: null prototype] { name: 'znjs', number: 345 }

// ?Difference between above two examples

console.log("Object 1:" + obj1); //Object 1:[object Object]
// console.log("Object 2:" + obj2); //! will throw error (TypeError: Cannot convert object to primitive value)

//? Since Object 2 can't be converted into primitive types most of the default functions (alert, toString(), Object.hasOwnProperty(), Object.constructor) will also throw an error

// *Method 2

const obj3 = new Object(); //Creates an empty object

console.log(obj3); //{}

const obj4 = new Object({ name: "znjs", number: 1234 });

console.log(obj4); //{ name: 'znjs', number: 1234 }

// *Method 3

function Car(name, model, year, owner) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

const myCar = new Car("Toyota", "Etios", 2015); //Creates an object with name myCar

// *We can even nest object inside another by passing it as an argument

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
}

const znjs = new Person("znjs", 20);

const myCar2 = new Car("Nissan", "300ZX", 1992, znjs);
console.log(myCar2);
/*Car {
    name: 'Nissan',
    model: '300ZX',
    year: 1992,
    owner: Person { name: 'znjs', age: 20 }
  }*/
console.log(myCar2.owner.name); //znjs

// *Method 4

function Person() {}
Person.prototype.name = "znjs";
Person.prototype.number = 1234;
var personObj = new Person();
console.log(personObj); //Person{}
console.log(personObj.name); //znjs

// *Method 5

class Vehicle {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
}

const myCar3 = new Vehicle("Honda", "Amaze", 2019);
console.log(myCar3); //Vehicle { name: 'Honda', model: 'Amaze', year: 2019 }
console.log(myCar3.name); //Honda

// *Method 6

let obj5 = { name: "znjs", number: 1234 };
console.log(obj5); //{ name: 'znjs', number: 1234 }
console.log(obj5.name); //znjs
