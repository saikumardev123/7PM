import { useState } from 'react';
function Sellers() {

    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1 onClick={updateCounter}>Users Count {counter}</h1>
        </div>
    )

}
export default Sellers;