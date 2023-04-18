import { useState } from 'react';
function Login() {

    const [form, setForm] = useState(
        {
            username: '',
            password: ''
        }
    )
    // console.log('state', state);

    const updateState = (event) => {
        if (event.target.name == "username") {
            setForm({ username: event.target.value, password: form.password })
        }
        if (event.target.name == "password") {
            setForm({ password: event.target.value, username: form.username })
        }
    }
    const login = (event) => {
        event.preventDefault();
        console.log("form", form);
    }
    return (
        <div>
            <form>
                <input onChange={updateState} type="text" placeholder="username here" name="username"></input> <br></br><br></br>
                <input onChange={updateState} type="text" placeholder="password here" name="password"></input> <br></br><br></br>
                <button onClick={login}>Login</button>
            </form>
        </div>
    )
}
export default Login;



// function f1() {
//     return [10, 20];
// }

// var [x, y] = f1();