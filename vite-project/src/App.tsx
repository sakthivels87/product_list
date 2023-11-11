import { useState } from "react";
import ProductsList from "./components/ProductsList";
import products from "./products";
import ProductFilter from "./components/ProductFilter";

function App() {
  const [selectedDept, setSelectedDept] = useState("");
  const [productItems, setProductItems] = useState(products);
  const filteredProducts = selectedDept
    ? productItems.filter((p) => p.department === selectedDept)
    : productItems;
  return (
    <div className="container">
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
