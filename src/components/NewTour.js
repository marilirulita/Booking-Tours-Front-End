const NewTour = () => {
  // const URLTOUR = 'http://127.0.0.1:3000/tours';
  const URLRESER = 'http://127.0.0.1:3000/user_tours';

  // const tourData = {
  //   title: 'Test Tour',
  //   duration: 4.0,
  //   description: 'In this tour we will visit x and ...',
  //   city: 'Testing',
  //   user_id: 1,
  //   cost: 500,
  //   photo: 'https://cdn.mexicodestinos.com/tours/tour-a-chichen-itza-princ-min.jpg',
  // };

  const reservationData = {
    user_id: 1,
    tour_id: 3,
    reservation_date: '2021-10-10',
    persons_number: 4,
  };

  const postData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    console.log(response);
    return response.json();
  };

  return (
    <div>
      <button type="submit" onClick={() => postData(URLRESER, reservationData)}>Create Tour</button>
    </div>
  );
};

export default NewTour;
