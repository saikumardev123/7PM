import logo from './logo.svg';
import './App.css';

function App() {
  const greetings = () => {
    alert("Good Evening!");
  }
  return (
    <div className="App">
      <button onClick={greetings}>Greetings</button>

      <input onKeyUp={(event) => {
        console.log("event", event.target.value);
      }} type="text" placeholder="enter username"></input>

    </div>
  );
}

export default App;
