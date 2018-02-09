/** Gang of 4 design patterns

Build strone Javascript object oriented

*/

/** What is a design pattern anyways?

- Javascript was built in 1995 was built in 10 days
- Raise of the Framework: Ember, React, Angular.
*/

/** Design Pattern to the Rescue

Christopger Alex (A Pattern Language) book.

"Each pattern represent our current best guess as to what arrangement of the physical environment will work to solve the problem presented"

"The empirical questions center on the problem"
-- does it occur and is it felt in the way we have described it?

Physycal Design Patterns
Common Problems -> Solutions
- On and off traffic for highways -> cloverleaf interchanges
- Pedestrians traffic -> sidewalks
- Entry and Exit for public building -> revolving doors

Desing Pattern Book by the gang of four
Elements of Reusable Object Oriented Software
Problems -> Solutions
- Designing Service Layers -> Module Pattern
- Overly COmplicated Object Interfaces -> Facade Patter (JQuery for the dom)
- Visibility into state changes -> Observer Pattern
*/

/** So what's a pattern anyway?
It solves a problem
It is a proven concept
The solution is not obvious
It describes a relationship 9 out of 10 deals with the relationship
It has significat human component. We need to think about it.
Lazy programmer, reuse somethin that it has already been solved
*/

/** Differnt types of patterns
- Creational desing patterns: deal with the creation of objects:
-- Constructor pattern (differnt in javascript)
-- Module
-- Factory
-- Singleton

- Structural patterns: deal with the makeup of the actual object themselves
-- Decorator
-- Facade
-- Flyweight

- Behavioral patterns: deal with the behavior
-- Command
-- Mediator
-- Observer
*/

/** Objects in Javascript
// creatting an object, called object literal
var obj = { var : "value"}
// Object.create()
var obj = Object.create(Object.prototype);// this is mainly for inheritance
// new Object()
var obj = new Object(); // out of favor, use classes instead
*/

/** Assigning keys and values

//dot notation
var obj = {};
obj.param = "val1";

//bracket notation. advantage, is that you can use variables to access a param
var obj = {};
obj["param"] = "value";

// in the object definition
var obj = { param = "val1" } ;
*/


/* Creational design patterns

- Used to create new objects
- Adapting creation to the situation


// Constructor Pattern

function ObjectName(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    this.toString = function () {
        return this.param1 + ' ' + this.param2;
    }
}

var foo = new ObjectName("hello", "world");

console.log(foo);

*/

const Task = require("./task_class.js");
const TaskItem = require("./task_item.js");

const task1 = new Task("singleton");
const taskItem11 = new TaskItem("taskItem11");
task1.task_items.push(taskItem11);
task1.toString();

const task2 = new Task("another one");

task1.save();
task2.save();


const Tito = require('./tito.js');

const tito = new Tito("ooo");

console.log(tito.getName());
