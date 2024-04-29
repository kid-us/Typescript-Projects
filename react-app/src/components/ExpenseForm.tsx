import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 chars" }),
  amount: z.number({ invalid_type_error: "Amount required!" }).min(1),
  category: z.string(),
});
const ExpenseForm = () => {
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            name="description"
            id="description"
            className="form-control my-2"
          />
          {errors.description && (
            <p className="small text light alert alert-danger">
              {errors.description?.message}
            </p>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input
            {...register("amount")}
            type="text"
            name="amount"
            id="amount"
            className="form-control my-2"
          />
          {errors.amount && (
            <p className="small text light alert alert-danger">
              {errors.amount?.message}
            </p>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            {...register("category")}
            name="category"
            id="category"
            className="form-select my-2"
          >
            <option selected hidden></option>
            <option value="lorem">Lorem</option>
          </select>
          {errors.category && (
            <p className="small text light alert alert-danger">
              {errors.category?.message}
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-primary py-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
