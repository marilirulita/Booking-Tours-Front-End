import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiDataTours, deleteTourApi } from '../redux/tours/toursAPI';

const DeleteTours = () => {
  const tours = useSelector((store) => store.tours);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiDataTours());
  }, [dispatch]);

  const deleteTour = (id) => {
    dispatch(deleteTourApi(id));
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
