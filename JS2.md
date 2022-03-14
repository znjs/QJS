<div align="center">
  
  <img src="https://user-images.githubusercontent.com/60209418/157986572-aec295ae-201f-4c35-8575-6da22081f93a.png" alt="javascript icon" width="200"/>

# How about some JS

</div>

## What is prototype chain ?

[JS File](./JS2.js)

- Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.
- JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype.
- Prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
- Nearly all objects in JavaScript are instances of Object which sits just below null on the top of a prototype chain.
- When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

### Resources

- [mdn-prototype-chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
