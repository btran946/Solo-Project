import React, { useEffect } from 'react';
import MainContainer from './Components/MainContainer';
const App = () => {
  // useEffect(() => {
  //   fetch('/api')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // });

  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;
