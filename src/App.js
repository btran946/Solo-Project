import React, { useEffect } from 'react';
import MainContainer from './Components/MainContainer';
const App = () => {
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;
