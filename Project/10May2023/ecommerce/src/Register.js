import { useState } from 'react';
import axios from 'axios';
function Register() {
    const [registerForm, setRegisterForm] = useState({
        username: "",
        password: "",
        emailId: ""
    })
    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setRegisterForm({ ...registerForm, [name]: value })
    }
    const register = (event) => {
        event.preventDefault();
        console.log("registration form", registerForm);
        axios.post("http://localhost:9012/addUser", registerForm).then(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        )
    }
    return (
        <div>
            <h1>Register Here</h1>
            <form>
                <input onChange={updateState} type="text" name="username" placeholder="username here"></input> <br></br><br></br>
                <input onChange={updateState} type="text" name="password" placeholder="password here"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="emailId" placeholder="email here"></input><br></br><br></br>
                <button onClick={register}>Register</button>
            </form>
        </div>
    )
}
export default Register;