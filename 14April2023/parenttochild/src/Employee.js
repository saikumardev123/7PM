function Employee(props) {
    console.log("props", props);
    return (
        <div>
            <h1>I am in employee component!</h1>
            {props.employeeData.name}
            {props.employeeData.address}
        </div>
    )
}
export default Employee;

/*

      App (customer obj - 3 keys)

      Bank (get customer obj from App)

      Customer (get customer obj from Bank and display the data on the UI).


*/