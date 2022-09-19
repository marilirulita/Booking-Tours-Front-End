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
    <div>
      <h1>Delete Tours page</h1>
      {tours.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.title}</h2>
          <p>{tour.description}</p>
          <button type="button" onClick={() => deleteTour(tour.id)}>Delete Tour</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteTours;
