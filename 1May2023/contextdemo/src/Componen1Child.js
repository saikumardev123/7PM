
import UserContext from './UserContext';
import { useContext } from 'react';
function ComponentChild() {
    const data = useContext(UserContext);
    console.log("data", data);

    return (
        <div>
            <h1>ComponentChild</h1>
        </div>
    )
}
export default ComponentChild;