function User(props) {
    var user = {
        name: "kiran",
        address: "hyderabad",
        username: "kiran_123"
    }

    props.onUserDataSend(user);
    return (
        <div>
            <h1>I am in User Component</h1>
        </div>
    )
}
export default User;