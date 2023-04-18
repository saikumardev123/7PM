function Customer(props) {
    return (
        <div>
            <h1>Customer</h1>
            {props.customerData.name}
            {props.customerData.id}
            {props.customerData.address}
        </div>
    )

}
export default Customer;