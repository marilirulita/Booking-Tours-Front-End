const NewTour = () => (
  <div className="content">
    <h1>Create a new Tour</h1>
    <div className="newTourForm">
      <input type="number" placeholder="User id" />
      <input type="text" placeholder="Tour Title" />
      <input type="number" placeholder="Duration" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="City" />
      <input type="number" placeholder="Cost" />
      <input type="text" placeholder="Photo URL" />
      <button type="submit" value="add-tour">Create Tour</button>
    </div>
  </div>
);

export default NewTour;
