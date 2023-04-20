import { useState } from 'react';
function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [userLogin, setUserLogin] = useState(false);

    const updateState = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setUser({ ...user, [name]: value })
    }
    const login = (event) => {
        event.preventDefault();
        if (user.username == "sai" && user.password == "kumar") {
            setUserLogin(true);
        }
        else {
            alert("User name or password incorrect!");
        }
    }
    if (userLogin == true) {
        return (
            <div>
                <h1>User Logged In! Welcome User</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <form>
                    <input onChange={updateState} placeholder="username here" type="text" name="username"></input>
                    <input onChange={updateState} placeholder="password here" type="text" name="password"></input>
                    <button onClick={login}>Login</button>
                </form>
            </div>
        )

    }


}
export default Login;