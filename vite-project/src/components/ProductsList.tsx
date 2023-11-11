export interface Product {
  id: number;
  name: string;
  department: string;
  amount: number;
}
interface Props {
  products: Product[];
  onDelete: (id: number) => void;
}
const ProductsList = ({ products, onDelete }: Props) => {
  if (products.length == 0) return null;

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.amount}</td>
              <td>{p.department}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>$ {products.reduce((acc, p) => acc + p.amount, 0)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductsList;
