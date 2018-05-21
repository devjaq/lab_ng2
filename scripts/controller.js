"use strict";

function TodoController() {
const vm = this;

  vm.removeTask = (index) => {
    vm.list.splice(index, 1);
  };

  vm.addTask = (todo, index) => {
    vm.list.push(todo.do);
    todo.do= {};
    console.log(vm.list);
    
  };

  vm.completeTask = (todo) => {
    console.log(todo.list[index]);
    todo.list[index].completed = true; 
    console.log(todo.list[index]);
  };

  vm.editTask = (todo,index) => {
    console.log(todo.edit);
    // console.log(index);

    console.log(todo.edit.completed );

    if (todo.edit.completed === undefined) {
      todo.edit.completed = false;
    }
     
    
    vm.list[index].taskName = todo.edit.taskName;
    vm.list[index].completed = todo.edit.completed;
    todo.edit= {};
    
    console.log(vm.list);
    // todo.do= {};
    // showForm = false;
  };

  vm.list = [
    {
      taskName: "Task1",
      completed: true
    },
    {
      taskName: "Task2",
      completed: false
    },
    {
      taskName: "Task3",
      completed: false
    },
    {
      taskName: "Task4",
      completed: true
    },
    {
      taskName: "Task5",
      completed: false
    }
  ];

};

angular
  .module("todoApp")
  .controller("TodoController", TodoController);