import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createStore } from "redux";

createRoot(document.getElementById("root")).render(<App />);

const initialState = { name: "REACT" };

// It will receive state and action
// Based on action, return a new state
// This Reducer function must return a state
function reducer(state = initialState, action) {
  console.log(action);
  if (action.type === "UPDATE_NAME") {
    const oldState = { ...state };
    // state.name = action.value; //never update state directly
    oldState.name = action.value;
    return oldState;
  }

  if (action.type === "version") {
    const oldState = { ...state };
    oldState.version = action.payload;
    return oldState;
  }
  return state;
}

// actions are JS object which contain pre defined key, it must contain type
const action = {
  type: "UPDATE_NAME",
  value: "JS",
};

const myAction = {
  type: "version",
  payload: 19,
};

const store = createStore(reducer);

// How do I know when something happens?

store.subscribe(() => {
  console.log("Store Changed:", store.getState());
});

// Now, I want to dispatch the aforementioned action

store.dispatch(action);
store.dispatch(myAction);

console.log(store);
console.log(store.getState());


/* 
Step 1 - create initialState
Step 2 - create store
Step 3 - create reducer function
Step 4 - create actions
Step 5 - Dispatch action


*/