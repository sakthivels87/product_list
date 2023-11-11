import { useRef } from "react";
import departments from "../departments";
import { Product } from "./ProductsList";

interface Props {
  onAddProduct: (p: any) => void; // Product object passing. Since id of the product not available am using any.
}
const AddProducts = ({ onAddProduct }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const deptRef = useRef<HTMLSelectElement>(null);

  return (
    <form
      className="form mb-5"
      onSubmit={(e) => {
        e.preventDefault();
        var _data = {
          name: "",
          amount: 0,
          department: "",
        };
        if (nameRef.current) _data.name = nameRef.current.value;
        if (amountRef.current) _data.amount = parseInt(amountRef.current.value);
        if (deptRef.current) _data.department = deptRef.current.value;

        onAddProduct(_data);
        nameRef.current!.value = "";
        amountRef.current!.value = "";
        deptRef.current!.value = "";
      }}
    >
      <div className="mb-2">
        <label className="form-label" htmlFor="name">
          Product Name
        </label>
        <input ref={nameRef} type="text" className="form-control" id="name" />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input
          ref={amountRef}
          type="number"
          className="form-control"
          id="amount"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="department" className="form-label">
          Department
        </label>
        <select ref={deptRef} id="department" className="form-select">
          <option value="">Select Department</option>
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
