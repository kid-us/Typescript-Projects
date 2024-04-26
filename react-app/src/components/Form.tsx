import { FormEvent } from "react";

export const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="age">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
