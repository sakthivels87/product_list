import { useState } from "react";
import ProductsList from "./components/ProductsList";
import products from "./products";
import ProductFilter from "./components/ProductFilter";
import AddProducts from "./components/AddProducts";

const _idGenerator = (init: number) => () => ++init;
const setId = _idGenerator(products.length);
function App() {
  const [selectedDept, setSelectedDept] = useState("");
  const [productItems, setProductItems] = useState(products);
  const filteredProducts = selectedDept
    ? productItems.filter((p) => p.department === selectedDept)
    : productItems;
  return (
    <div className="container">
      <AddProducts
        onAddProduct={(product) =>
          setProductItems([...productItems, { ...product, id: setId() }])
        }
      />
      <ProductFilter
        onSelectDept={(selectedDept) => setSelectedDept(selectedDept)}
      />
      <ProductsList
        products={filteredProducts}
        onDelete={(id) =>
          setProductItems(productItems.filter((p) => p.id != id))
        }
      />
    </div>
  );
}
export default App;
