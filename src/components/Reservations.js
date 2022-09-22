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
    reservations.map((obj) => (
      <div className="tour-details" key={obj.tour.id}>
        <div className="tour-photo">
          <img src={obj.tour.photo} alt="Tour" />
        </div>
        <div className="tour-data">
          <h2 className="tour-title">{obj.tour.title}</h2>
          <p className="tour-description">{obj.tour.description}</p>
          <div className="tour-city">
            <p>City:</p>
            <p>{obj.tour.city}</p>
          </div>
          <div className="tour-duration">
            <p>Duration (weeks):</p>
            <p>{obj.tour.duration}</p>
          </div>
          <div className="tour-cost">
            <p>Cost:</p>
            <p>{obj.tour.cost}</p>
          </div>
          <div className="tour-duration num-people">
            <p>Number of persons:</p>
            <p>{obj.persons_number}</p>
          </div>
          <div className="tour-cost">
            <p>Reservation Date:</p>
            <p>{obj.reservation_date}</p>
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
