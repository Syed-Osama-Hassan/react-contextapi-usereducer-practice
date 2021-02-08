import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(CounterContext);
    console.log(counterValue);

    return(
        <div>
        <h2>In this example we are using ContextAPI</h2>
        <h4>Counter value is: {counterValue[0]}</h4>
        <button onClick={() => {counterValue[1](++counterValue[0])}}>
            Increment Context
        </button>
        </div>
    );
}

export default Child;