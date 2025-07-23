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
  return { ...state, count: state.count + 1 };
}

// What Redux will do
reduxState = reducer(reduxState, { type: "count/increase" });
console.log(reduxState);
