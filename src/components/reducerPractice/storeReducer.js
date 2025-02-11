export const initialState = {
  counter: 0,
};

// each reducer function will take two parameters
// state - is abv the state of the reducer
// action is an object that will commonly contain {type: "INCREMENT", payload: {}}
export function reducer(state, action) {
  // dispatch({type: "INCREMENT", payload: someData})
  // simple control flow logic
  // INCREMENT -> logic
  // DECREMENT -> logic
  // ADD_TODO -> logic
  // etc...
  switch (action.type) {
    case 'INCREMENT':
      console.log('reducer initiated INCREMENT action');
      return { counter: state.counter + 1 }; // {counter: 0 + 1}
    case 'DECREMENT':
      console.log('reducer initiated DECREMENT action');
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}