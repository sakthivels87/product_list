import departments from "../departments";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, { message: "Name is required." }).max(60),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.1)
    .max(100_000),
  department: z.enum(departments, {
    errorMap: (e) => ({
      message: "Select valid department",
    }),
  }),
});

type ProductFormData = z.infer<typeof schema>;
interface Props {
  onAddProduct: (p: ProductFormData) => void; // Product object passing. Since id of the product not available am using any.
}
const AddProducts = ({ onAddProduct }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid, isLoading },
  } = useForm<ProductFormData>({ resolver: zodResolver(schema) });

  if (isLoading) return <p>Loading...</p>;
  return (
    <form
      className="form mb-5"
      onSubmit={handleSubmit((data) => {
        onAddProduct(data);
        reset();
      })}
    >
      <div className="mb-2">
        <label className="form-label" htmlFor="name">
          Product Name
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          className="form-control"
          id="name"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="amount"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="department" className="form-label">
          Department
        </label>
        <select
          {...register("department")}
          id="department"
          className="form-select"
        >
          <option value="">Select Department</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        {errors.department && (
          <p className="text-danger">{errors.department.message}</p>
        )}
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
