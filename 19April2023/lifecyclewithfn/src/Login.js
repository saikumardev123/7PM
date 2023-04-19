import { useState, useEffect } from 'react';
function Login() {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    useEffect(
        () => {
            if (loginForm.username == '' && loginForm.password == '') {
                console.log("component did mount");
            }
            else {
                console.log("component did update");
            }
        }, [loginForm]
    )
    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setLoginForm({ [name]: value })

    }
    return (
        <div>
            <form>
                <input onChange={updateState} type="text" name="username" placeholder="enter username"></input>
                <input onChange={updateState} type="text" name="password" placeholder="enter password"></input>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login;