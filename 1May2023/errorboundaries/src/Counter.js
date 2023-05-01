import { useState } from 'react';
function Counter() {

    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        setCounter(counter + 1);
    }

    if (counter == 5) {
        throw new Error("Counter exceeded error");
    }

    return (
        <>
            <h1 onClick={updateCounter}>{counter}</h1>
        </>
    )

}
export default Counter;

