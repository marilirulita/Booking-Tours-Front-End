import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiDataTours } from '../redux/tours/toursAPI';

const Main = () => {
  const tours = useSelector((state) => state.tours);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiDataTours());
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>Latest Tours</h1>
        <p>Please select a Tour</p>
      </header>
      <div>
        <h3>Here is the carrusel of options</h3>
        {tours.map((tour) => <p key={tour.id}>{tour.title}</p>)}
      </div>
    </div>
  );
};

export default Main;
