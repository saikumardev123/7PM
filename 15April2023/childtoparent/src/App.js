import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const captureUserData = (data) => {
    console.log("data", data);
  }
  return (
    <div className="App">
      <h1>App Component</h1>
      <User onUserDataSend={function (input) {
        captureUserData(input);
      }}></User>
    </div>
  );
}

export default App;
