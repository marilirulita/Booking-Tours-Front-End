import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
