import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { GetReservationsAPI } from '../redux/reservations/reservations';

const Reservations = () => {
  const { userID } = useParams();
  const dispatch = useDispatch();
  const reservations = useSelector((store) => store.reservations);
  useEffect(() => {
    document.title = dispatch(GetReservationsAPI(userID));
  }, []);

  return (
    reservations.map((tour) => (
      <div className="tour-details" key={tour.id}>
        <div className="tour-photo">
          <img src={tour.photo} alt="Tour" />
        </div>
        <div className="tour-data">
          <h2 className="tour-title">{tour.title}</h2>
          <p className="tour-description">{tour.description}</p>
          <div className="tour-city">
            <p>City:</p>
            <p>{tour.city}</p>
          </div>
          <div className="tour-duration">
            <p>Duration (weeks):</p>
            <p>{tour.duration}</p>
          </div>
          <div className="tour-cost">
            <p>Cost:</p>
            <p>{tour.cost}</p>
          </div>
          <div className="tour-reserve-btn">
            <button type="button">Cancel Reservation</button>
          </div>
        </div>
      </div>
    ))
  );
};
export default Reservations;
