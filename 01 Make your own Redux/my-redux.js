export function myCreateStore(reducer) {
  const listeners = [];
  let state;
  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe(listener) {
      listeners.push(listener);
    },
  };

  // Initialize state by dispatching a dummy action
  store.dispatch({ type: "@@INIT" });
  return store;
}
