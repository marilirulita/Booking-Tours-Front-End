import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
