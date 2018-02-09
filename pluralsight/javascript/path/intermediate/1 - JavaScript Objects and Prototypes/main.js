/* What we are going to learn now is:

- various ways to create objects
- undertanding of prototypes or inheritance
- create powerful and dynamic applicatoins

Getting started with Plunker
online html and javascript for testing

Plunker is awesome
*/

/** Object literal
var cat = { 
  name: 'Fluffy',  
  color: "white",
  speak: function () { display("Meeooww") }
};

cat.age = 3;
cat.speak();
*/

/* Object Constructor

'use strict';

function Cat(name, color) {
  this.name = name
  this.color = color
}

var cat = new Cat("Fluffy", "White");

display(cat);

*/

/* Object.create()
Used to create Javascript objects
var cat = Object.create(Object.prototype,
  {
    name : {
      value: "Fluffy",
      enumerable: true,
      writable: true,
      configurable: true
    },
    color : {
      value: "White",
      enumerable: true,
      writable: true,
      configurable: true
    }
    
  })

window.display(cat);
*/

/* Using ES6 to create classes
//ES6

class Cat {
  
  constructor(name, color) {
    this.name = name
    this.color = color
  }
  
  speak(){
    display("Meeoow")
  }
  
}

var cat = new Cat("Fluffy", "White");
display(cat);
cat.speak();

*/

/* Summary
- How to create objects literals
- How to create objects construction functions
- Object.create functions
- ES6 classes
*/

/** Properties in Javascript

- The writable attribute
it is an attribute that define whether we can modify the value of the field. if the field contains an object we can still change the values of the object so we need to freeze the object to really make it read-onyl
var cat = {
  name: "Fluffy",
  color: "White"
}

Object.defineProperty(cat, "name", {writable:false})
Object.freeze(cat.name)
var nameProp = Object.getOwnPropertyDescriptor(cat, 'name')

display(nameProp);

- The enumerable attribute
var cat = {
  name: "Fluffy",
  color: "White"
}

//Object.defineProperty(cat, "name", {enumerable: false})
for (var propName in cat){
  display(propName + " : " + cat[propName])
}

display(Object.keys(cat))

Also making it to not enumerable the property is not in JSON serialized

- The configurable attribute
to lock down the propeties form being changed or removed
delete a property

delete cat.name

*/

/** Using Getters and Setters
var cat = {
  name: { first: "Fluffy", last : "LaBeouf"},
  color: "White"
}

Object.defineProperty(cat, "fullName", {
  get: function(){
    return this.name.first + ' ' + this.name.last
  },
  
  set: function(value){
    var parts = value.split(' ')
    this.name.first = parts[0]
    this.name.last = parts[1]
  }
})

cat.fullName = "Pepe lepiue"
display(cat.fullName)

*/

/* Prototypes and Inheritance

How prototype works?
How to recognize prototype is being used in framewokrs
Object.defineProperty(Array.prototype, 'last', { get: function() {
    return this[this.length - 1];
}})

var arr = [ "red", "blue", "green"];
//is the same as calling the new constructor like this:
var arr2 = new Array("one", "two", "three");

alert(arr.last)
alert(arr2.last)

So what is Array.prototype is an object that exists in every function in javascript

*/



/** What is a prototype
It is an object that exists on every function in javascript

Functions have a prototype object
var myFunc =  function (){}
alert(myFunc.prototype)

Objects have a __proto__ object
var cat =  { name: "Fluffy"}
alert(cat.__proto__);

A prototype is an instance of an object

'use strict';

function Cat(name, color){
    this.name = name;
    this.color = color;
}

var fluffy = new Cat("Fluffy", "red");
alert(Cat.prototype);

alert(Cat.prototype === fluffy.__proto__); // true

Cat.prototype.age = 3;

alert(Cat.prototype.age === fluffy.__proto__.age); //true

Because changing the same prototype is the same instance so it applies to the same object instance

*/

/* More info about Prototype an dhow it works

function Cat(name, color){
    this.name = name;
    this.color = color;
}

var fluffy = new Cat("Fluffy", "red");
var muffin = new Cat("Muffin", "red");

Cat.prototype.age = 5;

fluffy.age = 4;

alert(fluffy.age);
alert(fluffy.__proto__.age);
*/

/** Changing the function's prototype

we can create a new object and change the property prototype to point to  the new object.
function Cat(name, color){
    this.name = name;
    this.color = color;
}

var fluffy = new Cat("Fluffy", "red");
var muffin = new Cat("Muffin", "red");

Cat.prototype.age = 4;

alert(fluffy.age);
alert(muffin.age);

Cat.prototype = { age: 5}

var snowbell = new Cat("snowbell", "orange");
alert(snowbell.age);
*/


/** Multiple level of inheritance
function Cat(name, color){
    this.name = name;
    this.color = color;
}

var fluffy = new Cat("Fluffy", "red");

alert(fluffy.__proto__);
alert(fluffy.__proto__.__proto__);
alert(fluffy.__proto__.__proto__.__proto__);

take away is that all the objects in javascript inherits from Object and object does ont have a __proto__ instance
*/

/** Creating our own inheritance in the chain

function Animal(){

}

Animal.prototype.speak = function(){
    alert("Grunt");
}

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);

var fluffy = new Cat("Fluffy", "red");
fluffy.speak();


*/











































