export const postTourApi = (current_user, newTour) => async (dispatch) => {
  // this will change for the specific url when deployed
  await fetch('http://localhost:3000/tours/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: current_user.id, 
      title: newTour.title, 
      description: newTour.description, 
      cost: newTour.cost, 
      duration: newTour.duration, 
      photo: newTour.photo, 
      city: newTour.city
    }),
  });
  dispatch(addTour(newTour));
};

export const deleteTourApi = (id) => async (dispatch) => {
  await fetch(`http://localhost:3000/tours/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
    }),
  });
  dispatch(removeTour(id));
};
