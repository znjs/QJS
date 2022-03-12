<div align="center">
  
  <img src="https://user-images.githubusercontent.com/60209418/157986572-aec295ae-201f-4c35-8575-6da22081f93a.png" alt="javascript icon" width="200"/>

# How about some JS

</div>

## Different ways to create an object in javascript ?

[JS File](JS1.js)

### Method 1

```javascript
// using create method

const obj1 = Object.create({}); //creates a normal object
obj1.name = "znjs"; //add parameter to object
obj1.number = 234;

console.log(obj1); //{ name: 'znjs', number: 234 }
```

### Method 2

```javascript
// using new keyword

const obj3 = new Object(); //Creates an empty object

console.log(obj3); //{}

const obj4 = new Object({ name: "znjs", number: 1234 });

console.log(obj4); //{ name: 'znjs', number: 1234 }
```

### Method 3

```javascript
// using functions

function Car(name, model, year, owner) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

const myCar = new Car("Toyota", "Etios", 2015); //Creates an object with name myCar
```

### Method 4

```javascript
// using function prototypes

Person.prototype.name = "znjs";
Person.prototype.number = 1234;
var personObj = new Person();
console.log(personObj); //Person{}
console.log(personObj.name); //znjs
```

### Method 5

```javascript
// using class constructors
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
```

### Method 6

```javascript
// using {} directly

let obj5 = { name: "znjs", number: 1234 };
console.log(obj5); //{ name: 'znjs', number: 1234 }
console.log(obj5.name); //znjs
```

### Resources

- [mdn-javascript-objectcreate](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [mdn-javascript-working-with-object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [ecma-docs-object](https://tc39.es/ecma262/#:~:text=calls%20to%20them.-,4.3.1%20Objects,-Even%20though%20ECMAScript)
