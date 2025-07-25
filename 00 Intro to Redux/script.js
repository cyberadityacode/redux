import { createStore } from "redux";

console.log(createStore);

let initialState = {
  count: 0,
  name: "aditya",
  age: 32,
};

const INCREASE = "count/increase";
const DECREASE = "count/decrease";
const INCREMENT_BY = "count/incrementBy";

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

function reducer(state = initialState, action) {
  console.log(action);

  /*   if (action.type === "count/increase") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "count/decrease") {
    return { ...state, count: state.count - 1 };
  } else if (action.type === "count/incrementBy") {
    return { ...state, count: state.count + action.payload };
  }

  return state; */
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
}

// What Redux will do
initialState = reducer(initialState, { type: "count/increase" });
initialState = reducer(initialState, { type: "count/increase" });
initialState = reducer(initialState, { type: "count/decrease" });
initialState = reducer(initialState, { type: "count/incrementBy", payload: 7 });
console.log(initialState);

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

store.dispatch({ type: "count/incrementBy", payload: 10 });

console.log(store.getState());

/* 
Whenever State changes, subscribe method it used to get info about the same.
whenever an action is dispatched, subscribe method is called automatically.

*/

store.subscribe(() => {
  console.log(store.getState()); // Whenever store state gets altered, it get consoled
});

store.dispatch({ type: "count/incrementBy", payload: 10 });
store.dispatch({ type: "count/incrementBy", payload: 10 });
store.dispatch({ type: "count/incrementBy", payload: 100 });

store.dispatch({ type: "count/incrementBy", payload: 10 });
