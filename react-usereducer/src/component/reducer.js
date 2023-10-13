import React,{useReducer} from 'react'

const initialState = 0;

function reducer(state, action) {
  //must return state
  switch (action) {
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
    case 'reset':
        return initialState;
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state)
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('reset')}>!</button>
    </>
  );
}

export default Counter