// let myName = "aditya";
/* myName = "dubey"
  console.log(myName);
  console.log(myName[0]);
 */
// myName[0] = "d"; //App.jsx:9 Uncaught TypeError: Cannot assign to read only property '0' of string 'aditya'
// console.log(myName);

import { act } from "react";

let myName = "aditya";

function changeMyName(newName) {
  newName = "adityadubey";
  console.log("Hello ", newName);
}

changeMyName(myName);
console.log(myName);

/* 
  For Primitives, we cannot change the created Value
  -> Once the string is created you cannot change it
  ex. if previousString is JS you can't rename it to PHP
  because, Even if you try to do change, assuming 'let' will allow you to alter. It won't because that variable reference will point to new reference, leaving the erstwhile for the garbage collection
  
  */

/* 
  Non Primitives are mutable

  */
const obj = { name: "JS" };
function changeLang(param) {
  param.name = "react";
  console.log(param);
}

// changeLang(obj);

console.log(obj);
// Const keyword prevents re-assignment
// Object.freeze can only work if its not nested object
// structuredClone helps to create a copy of an Object.

changeLang(structuredClone(obj)); // Comment the aforementioned function call

const obj2 = {
  name: "JS",
  setName(newName) {
    obj2.name = newName;
  },
};

console.log(obj2);
obj2.setName("React");
console.log(obj2);

const obj3 = {
  _name: "JavaScript",
  set name(newName) {
    if (!newName.length) {
      return;
    }
    this._name = newName;
  },
  get name() {
    return this._name;
  },
};

obj3.name = "REACT";
console.log(obj3.name);

// Redux begin

const store = {}; //App Data

store.data = "something";
store.anotherData = "ok";

console.log(store);

store.anotherData = "ok!";
console.log(store);

// Rule : What do you want to update with provided Value?
//name of the person or something else
let storeJS = {};

const adityaAction = {
  name: "aditya",
  value: { msg: "JS is awesome" },
};

// I want to update storeJS not directly by indirectly

function reducer(oldStore, action) {
  if (action.name === "aditya") {
    console.log("action", action);
    subscribe({ ...oldStore, ...action.value });
    return { ...oldStore, ...action.value };
  }
}

function dispatch(old, action) {
  return reducer(old, action);
}

console.log(storeJS); //Empty object
const newState = dispatch(storeJS, adityaAction);

storeJS = newState;

function subscribe(data) {
  console.log("store changed ", data);
}

console.log({ storeJS });
