import { useState, useEffect } from 'react';
function Counter() {
    console.log("Counter - Component called");
    const [count, setCount] = useState({
        counter: 0
    })
    useEffect(() => {
        if (count.counter == 0) {
            console.log("component did mount");
        }
        else {
            console.log("component did update");
        }
    }, [count])

    const incCounter = () => {
        setCount({
            counter: count.counter + 1
        });
    }
    return (
        <div>
            <h1 onClick={incCounter}>Counter {count.counter}</h1>
        </div>
    )
}
export default Counter;