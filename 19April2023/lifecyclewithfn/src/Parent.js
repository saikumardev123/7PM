import { useState, useEffect } from 'react';
import Child from './Child';
function Parent() {
    console.log("Parent - Component called");
    const [count, setCount] = useState({
        counter: 0
    })
    const incCounter = () => {
        setCount({
            counter: count.counter + 1
        });
    }
    return (
        <div>
            <h1 onClick={incCounter}>Counter {count.counter}</h1>
            <Child counter={count.counter}></Child>
        </div>
    )
}
export default Parent;