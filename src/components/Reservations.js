import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { GetReservationsAPI, deleteReservationApi } from '../redux/reservations/reservations';

const Reservations = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.length < 1) {
      navigate('/Login');
    }
  }, [navigate, user]);

  const { userID } = useParams();
  const dispatch = useDispatch();
  const reservations = useSelector((store) => store.reservations);
  useEffect(() => {
    if (user.length > 0) {
      dispatch(GetReservationsAPI(user[0].token));
    }
  }, [reservations, dispatch, userID, user]);

  const deleteReservation = (id) => {
    dispatch(deleteReservationApi(id));
    navigate('/Reservations');
  };
  useEffect(() => {
    document.title = 'My reservations';
  }, []);

  if (reservations !== undefined) {
    return (
      <div>
        {reservations.map((obj) => (
          <div
            className="tour-details"
            key={obj.reservation_id}
          >
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
                <button className="cancel-btn" type="button" onClick={() => deleteReservation(obj.reservation_id)}>Cancel Reservation</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return false;
};
export default Reservations;
