import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTour } from '../redux/tours/tours';

const DeleteTours = () => {
  const tours = useSelector((store) => store.tours);
  const dispatch = useDispatch();

  // const deleteTour = (id) => {
  //   dispatch(removeTour(id));
  // };

  return (
    <div>
      <h1>Delete Tours page</h1>
      {tours.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.title}</h2>
          <p>{tour.description}</p>
          <button type="button" onClick={() => dispatch(removeTour(tour.id))}>Delete Tour</button>
        </div>
      ))}
    </div>
  );
};

export default DeleteTours;
