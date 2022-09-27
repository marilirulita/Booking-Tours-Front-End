import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchApiDataTours } from '../redux/tours/toursAPI';
import { PostReservationsAPI } from '../redux/reservations/reservations';
import '../styling/ReservationsForm.css';

const Reservations = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userStore = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore.length < 1) {
      navigate('/Login');
    }
  }, [navigate, userStore]);

  const { token } = user;

  const [value, setValue] = useState({
    persons_number: 0, reservation_date: '', tour_id: 0, user_id: 0,
  });

  const onChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
  };

  const dispatch = useDispatch();
  const Store = useSelector((store) => store.tours);
  useEffect(() => {
    document.title = dispatch(fetchApiDataTours(token));
  }, [dispatch, token]);

  const Reserve = (e) => {
    e.preventDefault();
    if (value.tour_id > 0) {
      dispatch(PostReservationsAPI(value));
      navigate('/Reservations');
    } else {
      // eslint-disable-next-line
      alert('Please select a tour');
    }
  };

  useEffect(() => {
    document.title = 'Create a Reservation';
  }, []);

  return (
    <div className="reservations">
      <h1>Reservations</h1>
      <form onSubmit={Reserve} className="reservation-form" action="">
        <input type="date" id="reservation_date" placeholder="Reservation date DD-MM-YYYY" onChange={onChange} required />
        <input id="persons_number" type="number" min="0" placeholder="Number of Persons" onChange={onChange} required />
        <select id="tour_id" onChange={onChange}>
          <option key="option">--Option--</option>
          {Store.map((element) => (
            <option key={element.id} value={element.id}>{element.title}</option>
          ))}
        </select>
        <button className="reserve" type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservations;
