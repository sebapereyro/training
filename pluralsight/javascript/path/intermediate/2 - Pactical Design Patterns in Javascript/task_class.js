'use strict'

module.exports = class TaskClass {

  constructor(name){
    this.name = name;
    this.completed = false;
    this.task_items = [];
  }

  complete(){
    console.log('completing task: ' + this.name);
    this.completed = true;
  }

  save(){
    console.log('saving task: ' + this.name);
  }
}


// var task1 = new Task("singleton");
// // var taskItem11 = new TaskItem("taskItem11");
// // task1.task_items.push(taskItem11);
// // task1.toString();
//
// var task2 = new Task("another one");
//
// task1.save();
// task2.save();
