import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchApiDataTours } from '../redux/tours/toursAPI';

const Main = () => {
  const tours = useSelector((store) => store.tours);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiDataTours());
  }, [dispatch]);

  return (
    <div className="container">
      <header>
        <h1>Latest Tours</h1>
        <p>Please select a Tour</p>
      </header>
      <div>
        <h3>Here is the carrusel of options</h3>
        {tours.map((tour) => (
          <div key={tour.id} className="element">
            <img
              src={tour.photo}
              alt={tour.title}
            />
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            <Link to={`/TourDetails/${tour.id}`}>Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
