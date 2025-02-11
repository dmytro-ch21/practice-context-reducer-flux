import { useReducer, useState } from 'react';
import { reducer, initialState } from './storeReducer';

function DemoReducer() {
  // two mandataory things to provide, 1. reducer function, 2. initial state
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="container text-center">
      <div className="border border-2  border-dark-subtle rounded-3 p-4 mt-4">
        <h5>Counter</h5>
        <h4>{state.counter}</h4>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="btn btn-success me-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="btn btn-danger ms-2"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default DemoReducer;
