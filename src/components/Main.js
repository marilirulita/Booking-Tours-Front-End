import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import Swiper for carrousel
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchApiDataTours } from '../redux/tours/toursAPI';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Main = () => {
  const tours = useSelector((store) => store.tours);
  const user = useSelector((store) => store.user);
  let token = '';
  const getToken = () => {
    if (user.token) {
      token = user.token;
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getToken();
    dispatch(fetchApiDataTours(token));
  }, [dispatch]);

  return (
    <div className="main-container">
      <header>
        <h1>LATEST TOURS</h1>
        <p>Please select a Tour</p>
      </header>
      <Swiper
        className="slide-container"
      // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        slidesPerView={3}
        // loop
        centeredSlides
        grabCursor="true"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          750: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <Link to={`/TourDetails/${tour.id}`}>
              <div className="image-content">
                <div className="card-image">
                  <img
                    src={tour.photo}
                    alt={tour.title}
                    className="card-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h3 className="name">{tour.title}</h3>
                <span className="dots-division">...............</span>
                <p className="description">{tour.description}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to="/DeleteTours">Delete tour </Link>
    </div>
  );
};

export default Main;
