import { useState } from 'react';
function Login() {
    const [loginForm, setLoginForm] = useState({
        emailId: "",
        password: ""
    })
    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setLoginForm({ ...loginForm, [name]: value })
    }
    const login = (event) => {
        event.preventDefault();
        console.log("login form", loginForm);

    }
    return (
        <div>
            <h1>Login Here</h1>
            <form>
                <input onChange={updateState} type="text" name="emailId" placeholder="email here"></input><br></br><br></br>
                <input onChange={updateState} type="text" name="password" placeholder="password here"></input><br></br><br></br>
                <button onClick={login}>Login</button>
            </form>
        </div>
    )
}
export default Login;