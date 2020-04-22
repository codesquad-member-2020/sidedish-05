import React from "react";
// import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
// import ProductCarousel from "./components/ProductCarousel/ProductCatousel";
import reset from "./Reset";
import { Global } from "@emotion/core";

const App = () => {
  return (
    <div>
      <Global styles={reset} />
      {/* <Header></Header> */}
      <Category></Category>
      {/* <ProductCarousel></ProductCarousel> */}
    </div>
  );
};

export default App;
