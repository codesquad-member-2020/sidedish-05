import React from "react";
// import Header from "./components/Header/Header";
import CategoryList from "./components/Category/CategoryList";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import reset from "./Reset";
import { Global } from "@emotion/core";
import { API_URL } from "./common/config";

const App = () => {
  return (
    <div>
      <Global styles={reset} />
      {/* <Header></Header> */}
      <CategoryList></CategoryList>
      <ProductCarousel api={API_URL.main}></ProductCarousel>
      <ProductCarousel api={API_URL.soup}></ProductCarousel>
    </div>
  );
};

export default App;
