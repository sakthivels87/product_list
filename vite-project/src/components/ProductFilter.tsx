import departments from "../departments";
interface Props {
  onSelectDept: (dept: string) => void;
}
const ProductFilter = ({ onSelectDept }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor="departments" className="form-label">
        Department
      </label>
      <select
        className="form-select"
        id="departments"
        onChange={(e) => onSelectDept(e.target.value)}
      >
        <option value="">All Departments</option>
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilter;
