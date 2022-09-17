import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiDataTours } from '../redux/tours/toursAPI';

const Reservations = () => {
  const [value, setValue] = useState({
    persons_number: 0, reservation_date: '', tour_id: 0, user_id: 0,
  });

  const onChange = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
    console.log(value);
  };

  const dispatch = useDispatch();
  const Store = useSelector((store) => store.tours);
  useEffect(() => {
    document.title = dispatch(fetchApiDataTours());
  }, []);

  return (
    <form action="">
      <input id="reservation_date" placeholder="Reservation date DD-MM-YYYY" onChange={onChange} required />
      <input id="persons_number" type="number" placeholder="Number of Persons" onChange={onChange} required />
      <select id="tour_id" onChange={onChange}>
        {Store.map((element) => (
          <option key={element.id} value={element.id}>{element.title}</option>
        ))}
      </select>
      <button className="reserve" type="submit">Reserve</button>
    </form>
  );
};

export default Reservations;
