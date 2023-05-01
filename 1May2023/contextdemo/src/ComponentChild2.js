
import UserContext from './UserContext';
import { useContext } from 'react';
function ComponentChild2() {
    const data = useContext(UserContext);
    console.log("data", data);

    return (
        <div>
            <h1>ComponentChild2</h1>
        </div>
    )
}
export default ComponentChild2;