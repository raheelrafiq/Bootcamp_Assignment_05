import React, { useReducer } from 'react';
import countReducer from './countReducer';

const Counter = () => {
    let [state, dispatch] = useReducer(countReducer, 0);
    return (
        <div>
            <h2>Counter with Reducer</h2>

            <h2>Value is: {state}</h2>
            <button onClick={() => dispatch('Inc')}>+</button>
            <button onClick={() => dispatch('Dec')}>-</button>
        </div>
    )
}
export default Counter