// import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export const Form = () => {
  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: "",
  //   });

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
