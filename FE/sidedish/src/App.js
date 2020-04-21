import React from "react";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import ProductCarousel from "./components/ProductCarousel/ProductCatousel";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Category></Category>
      <ProductCarousel></ProductCarousel>
    </div>
  );
};

export default App;
