/*Objects

var coffeeFlavor = "espresso";
var coffeeTemparature = "hot";
var coffeeOunces = 100;
var coffeeMilk = true;

This is an example
var myCoffee = {
    flavor: "espresso",
    temperature: "hot",
    ounces: 100,
    milk: true
};

*/

/** Object methods

var myCoffee = {
    flavor: "espresso",
    temperature: "hot",
    ounces: 100,
    milk: true,
    
    reheat: function(){
        if (this.temperature === "cold"){
            this.temperature = "hot";
            alert("Your coffee has been reheated");
        }
    }
};


myCoffee.temperature = "cold";
myCoffee.reheat();

*/


/** Object constructors

var mark = {
    name: "Mark",
    shirt: "blue"
};

var lisa = {
    name: "Lisa",
    shirt: "red"
};

function Friend(name, shirt){
    this.name = name;
    this.shirt = shirt;
    this.sayName = function(what){
        alert(what + " " + name);
    }
}

var denny = new Friend("denny", "green");
denny.sayName("My Name is");

*/

/* Object oriented programming in javascript
This is what I was talking about. Seba it is time to shine!

- We can create an object literal -  1 instance
- we define an object prototype = multiple instances

There are multiple categories of objects:
- host objects: web browser
- Core objects
- objects defined by the developer

Host objects
Document
Window
Element
Event
Node
Comment
Console

Core objects
Defined by Javascript itself
Math
Object
String
Boolean
Array
Date
Number

Everything else Dev Defined
*/

/* This and the global object scope and the web browser


function Friend(name){
    this.name = name
}

alert(this); // [object Window]

function sayHello(){
    alert("Hello");
}

sayHello();

window.sayHello();

// overriding alert from window
function alert(){
    console.log("Hello")
}
*/

/* Local and Global Scope

//global variable
var example = "value";

function alertExample(){
    alert(example);
    // local scope
    var anotherExample = "anotherValue";
    // global scope because we do not use var for the variable
    anotherExample = "anotherValue";
}

alertExample();
alert(anotherExample);

*/

/* Understanding Scope / Nesting

function alertNumber(){
    var one = "one";
    alert(one);
    
    function alertTwo(){
        var two = "two";
        alert(two);
    }
    alertTwo();
}
alertNumber();

Explained

Global
    function1
        function2
            function3

We can namespacing?? investigate later.
    
*/

/* JSLint and coding conventions
JSLint a linting tool
It is awesome not only check for errors but also help focus on consistency

window.alert("hello");

function call() {
    'use strict';
}

JSLint is awesome
*/









































