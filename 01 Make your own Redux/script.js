console.log("Make your own Redux");
const INCREASE = "count/increase";
const DECREASE = "count/decrease";
const INCREMENT_BY = "count/incrementBy";
import { myCreateStore } from "./my-redux";

let initialState = {
  count: 0,
  name: "aditya",
  age: 32,
};

const myStore = myCreateStore(reducer);

console.log(myStore);
console.log(myStore.getState());

function reducer(state = initialState, action) {
  console.log(action);

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

myStore.dispatch({ type: INCREASE});
myStore.dispatch({ type: INCREMENT_BY , payload : 1077});
console.log(myStore.getState());
