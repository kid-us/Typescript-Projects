// import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger small">The name field is required!</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger small">
              The name must be at least 3 chars.
            </p>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            {...register("age", { required: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age?.type === "required" && (
            <p className="text-danger small">The age field is required!</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
