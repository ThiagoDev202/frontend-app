import React from "react";
import ProductFetcher from "./components/ProductFetcher";
import ProductGrid from "./components/ProductGrid";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div>
      <h1>Grid View</h1>
      <ProductFetcher render={(products) => <ProductGrid products={products} />} />
    
      <h1>List View</h1>
      <ProductFetcher render={(products) => <ProductList products={products} />} />
    </div>
  );
};

export default App;
