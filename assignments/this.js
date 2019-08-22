/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global object binding
     this binding allows this key word not to use the defind value it restricts any binding to it..
* 2. implicit binding
     it is most commenly used it uses the values defind by the calling functions
* 3. new binding
      this uses the values defind by the new object..
* 4. explicit binding
       it uses specific values defind by out side declarations by using call(artrbutes) or bind(functions) key words
*
* write out a code example of each explanation above
*/

// Principle 1
// 'use strict';
// // code example for Window Binding
// function sayHeloo(hi) {
//     console.log(this);
//     return hi;
//   }
//   sayHeloo("Haloa thire...");

// // Principle 2

// code example for Implicit Binding
// const myName = {
//     greeting: 'Hi thire and hear..',
//     saymyName: function(name) {
//       console.log(`${this.greeting} my name is ${name}`);
      
//     }
//   };
//   myName.saymyName('zeee.');

// // Principle 3

// code example for New Binding
// function Person(greeter) {
//     this.greeting = 'Hi thire and hear..';
//     this.greeter = greeter;
//     this.speak = function() {
//      console.log(this.greeting + this.greeter);
    
//     };
//   }
  
//   const jerry = new Person('From new obj BINding');
//   jerry.speak();
 

// // Principle 4

// // code example for Explicit Binding

function callOfZee(){
 console.log(`${this.name} says ${this.msg}`);
}

const sayhi = {
  name: 'Zee..',
  species: 'dog',
  msg: 'Wllcome to WEB23..'
}

//callOfZee.call(sayhi); //invoke the function ...using call
fredlymssg=callOfZee.bind(sayhi);//invoke the function ...using bind
fredlymssg();