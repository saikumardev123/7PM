import './App.css';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Counter></Counter>
      </ErrorBoundary>
      {/* <Counter></Counter> */}
    </>
  );
}

export default App;
