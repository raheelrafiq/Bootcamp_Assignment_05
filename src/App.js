import React, { useState } from 'react';
import './App.css';
import Parents from './parents';
import colorContext from './colorContext';

function App() {
  let colorState = useState('White')
  return (
    <colorContext.Provider value={colorState}>
      <div className={`box ${colorState[0] === 'Red' ? 'red' : colorState[0] ==='Green' ? 'green' : colorState[0] ==='Blue' ? 'blue' : 'white'}`}>
        <Parents/>
      </div>
    </colorContext.Provider>
  );
}

export default App;
