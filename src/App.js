import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Main from './components/Main';
import { Counter } from './components/Counter';
import TourDetails from './components/TourDetails';
import NewTour from './components/NewTour';
import ReservationsForm from './components/ReservationsForm';
import Reservations from './components/Reservations';
import DeleteTours from './components/DeleteTours';
import './styling/Navbar.css';
import './styling/reservations.css';
import './styling/TourDetails.css';
import './styling/main.css';
import './styling/newTourForm.css';
import './styling/deleteTours.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/TourDetails/:tourID" element={<TourDetails />} />
        <Route path="/NewTour" element={<NewTour />} />
        <Route path="/ReservationsForm" element={<ReservationsForm />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/DeleteTours" element={<DeleteTours />} />
      </Routes>
    </div>
  );
}

export default App;
