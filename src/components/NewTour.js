import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { postTourApi } from '../redux/tours/toursAPI';

const NewTour = () => {
  const newTour = {
    title: '',
    duration: '',
    description: '',
    city: '',
    user_id: '',
    cost: '',
    photo: '',
  };

  const [state, setState] = useState(newTour);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const submitForm = () => {
    dispatch(postTourApi(state));
    setState(newTour);
    navigate('/');
  };

  return (
    <div className="newtour-content">
      <h1>CREATE A NEW TOUR</h1>
      <div className="newTourForm">
        <div className="form-column">
          <input type="number" placeholder="User id" value={state.user_id} onChange={(e) => setState({ ...state, user_id: e.target.value })} />
          <input type="text" placeholder="Tour Title" value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} />
          <input type="number" placeholder="Duration" value={state.duration} onChange={(e) => setState({ ...state, duration: e.target.value })} />
          <textarea placeholder="Description" value={state.description} onChange={(e) => setState({ ...state, description: e.target.value })} />
        </div>
        <div className="column-rigth">
          <div>
            <input type="text" placeholder="City" value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })} />
            <input type="number" placeholder="Cost" value={state.cost} onChange={(e) => setState({ ...state, cost: e.target.value })} />
            <input type="text" placeholder="Photo URL" value={state.photo} onChange={(e) => setState({ ...state, photo: e.target.value })} />
          </div>
          <div>
            <button type="submit" value="add-tour" onClick={submitForm}>Create Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTour;
