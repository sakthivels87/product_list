import { useState } from "react";
import ProductsList from "./components/ProductsList";
import products from "./products";

function App() {
  const [productItems, setProductItems] = useState(products);
  return (
    <div className="container">
      <ProductsList
        products={productItems}
        onDelete={(id) =>
          setProductItems(productItems.filter((p) => p.id != id))
        }
      />
    </div>
  );
}
export default App;
