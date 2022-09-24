import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteTourApi } from '../redux/tours/toursAPI';

const DeleteTours = () => {
  const user = useSelector((store) => store.user);
  const tours = useSelector((store) => store.tours);
  let token = '';
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (tours.length < 1) {
      navigate('/');
    }
  }, [navigate, tours]);

  useEffect(() => {
    if (user.length > 0) {
      token = user[0].token;
    } else {
      navigate('/Login');
    }
  }, [navigate, user]);

  const deleteTour = (id) => {
    dispatch(deleteTourApi(id, token));
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
