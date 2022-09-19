import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import { Counter } from './components/Counter';
import TourDetails from './components/TourDetails';
import NewTour from './components/NewTour';
import './styling/TourDetails.css';
import './styling/main.css';
import './styling/newTourForm.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/TourDetails/:tourID" element={<TourDetails />} />
          <Route path="/NewTour" element={<NewTour />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
