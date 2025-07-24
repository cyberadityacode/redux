let reduxState = {
    count: 0,
    name: "aditya",
    age: 32
};
/* let state = {
  count: 0,
  name: "aditya",
  age: 32,
}; */ /* 
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
console.log(state); */ // redux calls state updater as reducer
function reducer(state, action) {
    console.log(action);
    if (action.type === "count/increase") return {
        ...state,
        count: state.count + 1
    };
    else if (action.type === "count/decrease") return {
        ...state,
        count: state.count - 1
    };
    else if (action.type === "count/incrementBy") return {
        ...state,
        count: state.count + action.payload
    };
    return state;
}
// What Redux will do
reduxState = reducer(reduxState, {
    type: "count/increase"
});
reduxState = reducer(reduxState, {
    type: "count/increase"
});
reduxState = reducer(reduxState, {
    type: "count/decrease"
});
reduxState = reducer(reduxState, {
    type: "count/incrementBy",
    payload: 7
});
console.log(reduxState); /* 
In a nutshell, a reducer is a function that takes two arguments: state and action.

state refers to the current state (or the initial state when the app first runs).

action is an object that typically contains a type (which describes what kind of change we want to make) and optionally a payload, which holds the data needed to perform that change.

The reducer function looks at the action.type and returns a new updated state based on it. The reducer must be a pure function, meaning it doesn't modify the original state but instead returns a new one.

*/ 

//# sourceMappingURL=00 Intro to Redux.672d4772.js.map
