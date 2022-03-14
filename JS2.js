// !PROTOTYPE CHAINING

// *INHERITING PROPERTIES

const F = function () {
  this.a = 1;
  this.b = 2;
};
const o = new F(); // { a: 1, b: 2 }

// add properties in F function's prototype
F.prototype.b = 3;
F.prototype.c = 4;

// do not set the prototype F.prototype = { b: 3, c: 4 };
// this will break the prototype chain
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype.
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and
// there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.

// *INHERITING METHODS

const o2 = {
  a: 2,
  m: function () {
    return this.a + 2;
  },
};

console.log(o2.a); //2

console.log(o2.m()); //4

const oCopy = Object.create(o2);
// oCopy is an object that inherits from o2

oCopy.a = 10;

console.log(oCopy.a); //10

console.log(oCopy.m()); //12
// "this" in oCopy will point to property a in oCopy not in o2
