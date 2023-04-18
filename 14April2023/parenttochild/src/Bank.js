import Customer from "./Customer";

function Bank(props) {

    return (
        <div>
            <h1>I am Bank</h1>
            <Customer customerData={props.customerData}></Customer>
        </div>
    )

}

export default Bank;