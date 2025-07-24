import { createStore } from "redux";

console.log(createStore);

let reduxState = {
  count: 0,
  name: "aditya",
  age: 32,
};
/* let state = {
  count: 0,
  name: "aditya",
  age: 32,
}; */
/* 
function increment() {
  //   state.count = state.count + 1; //Mutating State

  //   Non Mutating State - Replacing the object
  state = {
    ...state,
    count: state.count + 1,
  };
}
increment();
increment();
console.log(state); */

// redux calls state updater as reducer

function reducer(state, action) {
  console.log(action);

  if (action.type === "count/increase") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "count/decrease") {
    return { ...state, count: state.count - 1 };
  } else if (action.type === "count/incrementBy") {
    return { ...state, count: state.count + action.payload };
  }

  return state;
}

// What Redux will do
reduxState = reducer(reduxState, { type: "count/increase" });
reduxState = reducer(reduxState, { type: "count/increase" });
reduxState = reducer(reduxState, { type: "count/decrease" });
reduxState = reducer(reduxState, { type: "count/incrementBy", payload: 7 });
console.log(reduxState);

const store = createStore(reducer);

console.log(store);
