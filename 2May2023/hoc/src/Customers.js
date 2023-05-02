
import HOC from './HOC'; function Customers(props) {
    return (
        <div>
            <h1 onClick={props.updateCounter}>Customers Count {props.counter}</h1>
        </div>
    )
}
const CustomersHOC = HOC(10, Customers)
export default CustomersHOC;