import Employee from "./Employee";
import Bank from "./Bank";

function App() {

  var employee = {
    name: "kiran",
    address: "hyderabad"
  }

  var customer = {
    name: "ram",
    address: "hyd",
    id: 101
  }

  return (
    <div>
      <h1>App Component!</h1>
      {/* <Employee employeeData={employee}></Employee> */}
      <Bank customerData={customer}></Bank>
    </div>
  )
}
export default App;
