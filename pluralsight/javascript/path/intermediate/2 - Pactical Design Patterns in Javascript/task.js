// This is a node app called task

//var task = {}; // it is the same way at the one below
//var task = Object.create(Object.prototype);
//var task =  new Object();

//var task = {
//    title: "My Task",
//    description: "My description",
//    toString: function () {
//        return this.title + " " + this.description;
//    }
//}
//
//console.log(task.toString());

/* Defining properties
in ES5 defineProperty was introduced
Object.defineProperty( task, 'name', {
    value: "my name",
    writable: true,
    enumrable: true,
    configurable: true,
})
*/

//var Task = function(name) {
//    this.name = name;
//    this.completed = false;
//    this.task_items = [];
//}
//
//Task.prototype.complete = function() {
//    console.log ( "completing task:" + this.name )
//    this.completed = true;
//}
//
//Task.prototype.save =  function() {
//    console.log( "saving task: " + this.name );
//}
//
//Task.prototype.toString =  function() {
//    for(item of this.task_items){
//        console.log("task_item: " + item.name);
//    }
//}
//
//module.exports = Task;
