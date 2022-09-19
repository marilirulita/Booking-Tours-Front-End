import { useState } from 'react';

const NewTour = () => {
  const newTour = {
    title: '',
    duration: 0,
    description: '',
    city: '',
    user_id: 0,
    cost: 0,
    photo: '',
  };

  const [state, setState] = useState(newTour);

  return (
    <div className="content">
      <h1>Create a new Tour</h1>
      <div className="newTourForm">
        <input type="number" placeholder="User id" value={state.user_id} onChange={(e) => setState({ ...state, user_id: e.target.value })} />
        <input type="text" placeholder="Tour Title" value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} />
        <input type="number" placeholder="Duration" value={state.duration} onChange={(e) => setState({ ...state, duration: e.target.value })} />
        <textarea placeholder="Description" value={state.description} onChange={(e) => setState({ ...state, description: e.target.value })} />
        <input type="text" placeholder="City" value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })} />
        <input type="number" placeholder="Cost" value={state.cost} onChange={(e) => setState({ ...state, cost: e.target.value })} />
        <input type="text" placeholder="Photo URL" value={state.photo} onChange={(e) => setState({ ...state, photo: e.target.value })} />
        <button type="submit" value="add-tour">Create Tour</button>
      </div>
    </div>
  );
};

export default NewTour;
