In a nutshell, a reducer is a function that takes two arguments: state and action.

state refers to the current state (or the initial state when the app first runs).

action is an object that typically contains a type (which describes what kind of change we want to make) and optionally a payload, which holds the data needed to perform that change.

The reducer function looks at the action.type and returns a new updated state based on it. The reducer must be a pure function, meaning it doesn't modify the original state but instead returns a new one.

To Run parcel (make sure to remove main key)

npx parcel index.html

npm install redux
