import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Counter } from './components/Counter';
import TourDetails from './components/TourDetails';
import './styling/TourDetails.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/TourDetails/:tourID" element={<TourDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
