
// import FirstComponent from './FirstComponent';
// import SecondComponent from './SecondComponent';
import React, { Suspense } from 'react';
const FirstComponent = React.lazy(() => import('./FirstComponent'));
const SecondComponent = React.lazy(() => import('./SecondComponent'));

function App() {

  if (10 == 10) {
    return (
      <div>
        <Suspense fallback={<div>Loading..</div>}>
          <FirstComponent></FirstComponent>
        </Suspense>
        <Suspense fallback={<div>loading..</div>}>
          <SecondComponent></SecondComponent>
        </Suspense>


      </div>
    )
  }
  else {
    return (
      <div className="App">



      </div>
    );
  }
}

export default App;
