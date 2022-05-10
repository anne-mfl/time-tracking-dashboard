import React, { useState } from 'react'
import './App.css';
import FirstColumn from './components/FirstColumn'
import SixSquares from './components/SixSquares'

function App() {

  const [periodicity, setPeriodicity] = useState('weekly')

  return (
    <div className="App">
      <main>
        <FirstColumn
          periodicity={periodicity}
          setPeriodicity={setPeriodicity}
        />
        <SixSquares
          periodicity={periodicity}
        />
      </main>
    </div>
  );
}

export default App;
