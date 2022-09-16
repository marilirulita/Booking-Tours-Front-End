import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
