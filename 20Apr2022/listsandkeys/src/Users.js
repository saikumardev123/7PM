function Users() {
    var users = [
        {
            userId: 101,
            name: "Kiran",
            address: "Hyderabad"
        },
        {
            userId: 102,
            name: "Rajesh",
            address: "Banglore"
        },
        {
            userId: 103,
            name: "Naveen",
            address: "Secunderabad"
        }
    ]
    const renderList = () => {
        let list = users.map(user => {
            return <tr key={user.userId}> <td>{user.userId}</td> <td>{user.name}</td> <td>{user.address} </td></tr>
        })
        return list;
    }
    return (
        <div>
            <h1>Users List</h1>
            <table border="1" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>name</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>

                    {renderList()}

                </tbody>
            </table>
            {/* <ul>
                {renderList()}
            </ul> */}
        </div>
    )
}
export default Users;