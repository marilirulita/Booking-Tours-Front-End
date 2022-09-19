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
        <input type="number" placeholder="User id" value={state.title} onChange={(e) => setState({ ...state, title: e.target.value })} />
        <input type="text" placeholder="Tour Title" />
        <input type="number" placeholder="Duration" />
        <textarea placeholder="Description" />
        <input type="text" placeholder="City" />
        <input type="number" placeholder="Cost" />
        <input type="text" placeholder="Photo URL" />
        <button type="submit" value="add-tour">Create Tour</button>
      </div>
    </div>
  );
};

export default NewTour;
