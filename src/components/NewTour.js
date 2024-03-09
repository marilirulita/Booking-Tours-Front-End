import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { postTourApi } from '../redux/tours/toursAPI';

const NewTour = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.length < 1) {
      navigate('/Login');
    }
  }, [navigate, user]);

  const newTour = {
    title: '',
    duration: '',
    description: '',
    city: '',
    cost: '',
    photo: '',
  };

  const [state, setState] = useState(newTour);
  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    let formCompleted = true;
    Object.keys(state).forEach((key) => {
      if (state[key] === '') {
        formCompleted = false;
      }
    });
    if (formCompleted) {
      const id = Math.round(Math.random() * 1000);
      dispatch(postTourApi(state, user[0].token, user[0].id, id));
      setState(newTour);
      navigate('/');
    }
  };

  useEffect(() => {
    document.title = 'Create New Tour';
  }, []);

  return (
    <div className="newtour-content">
      <h1>CREATE A NEW TOUR</h1>
      <form className="newTourForm" onSubmit={submitForm}>
        <div className="form-column">
          <input type="text" placeholder="Tour Title" value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} required />
          <input type="number" placeholder="Duration (weeks)" min="1" value={state.duration} onChange={(e) => setState({ ...state, duration: e.target.value })} required />
          <textarea placeholder="Description" value={state.description} onChange={(e) => setState({ ...state, description: e.target.value })} required />
        </div>
        <div className="column-rigth">
          <div>
            <input type="text" placeholder="City" value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })} required />
            <input type="number" placeholder="Cost" value={state.cost} onChange={(e) => setState({ ...state, cost: e.target.value })} required />
            <input type="text" placeholder="Photo URL" value={state.photo} onChange={(e) => setState({ ...state, photo: e.target.value })} required />
          </div>
          <div>
            <button className="add-tour-btn" type="submit" value="add-tour">Create Tour</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTour;
