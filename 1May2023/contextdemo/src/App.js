import logo from './logo.svg';
import './App.css';
import UserContext from './UserContext';
import Component1 from './Component1';

function App() {

  var users = [
    {
      id: 101,
      name: "kiran"
    },
    {
      id: 102,
      name: "rajesh"
    }
  ]

  return (
    <div className="App">
      <h1>I am in App Component</h1>

      <UserContext.Provider value={users}>

        <Component1></Component1>
      </UserContext.Provider>

    </div>
  );
}

export default App;
