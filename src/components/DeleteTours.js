import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteTourApi } from '../redux/tours/toursAPI';

const DeleteTours = () => {
  const tours = useSelector((store) => store.tours);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const deleteTour = (id) => {
    dispatch(deleteTourApi(id, user[0].token));
    navigate('/DeleteTours');
  };

  return (
    <div className="delete-container">
      <div className="grid-container">
        {tours.map((tour) => (
          <div key={tour.id} className="grid-element">
            <img src={tour.photo} alt={tour.title} />
            <div className="centered">
              <h2>{tour.title}</h2>
              <p>{tour.description}</p>
              <button type="button" onClick={() => deleteTour(tour.id)}>Delete </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteTours;
