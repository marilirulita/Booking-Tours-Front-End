import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiDataTours } from '../redux/tours/toursAPI';
import { PostReservationsAPI } from '../redux/reservations/reservations';
import '../styling/ReservationsForm.css';

const Reservations = () => {
  const user = JSON.parse(localStorage.getItem('user'));
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
  }, []);

  const Reserve = (e) => {
    e.preventDefault();
    dispatch(PostReservationsAPI(value));
  };
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
