export const Form = () => {
  return (
    <form>
      <div className="mb-2">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label htmlFor="age">Age</label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
