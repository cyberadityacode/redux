import React from "react";

export default function App() {
  // let myName = "aditya";
  /* myName = "dubey"
  console.log(myName);
  console.log(myName[0]);
 */
  // myName[0] = "d"; //App.jsx:9 Uncaught TypeError: Cannot assign to read only property '0' of string 'aditya'
  // console.log(myName);

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
  
  return <div>App</div>;
}
