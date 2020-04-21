import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import ImageList from "../Product/DetailProduct/ImageList";
import ProductInfo from "../Product/DetailProduct/ProductInfo";
import RecommandProductList from "../Product/DetailProduct/RecommandProductList";

const DetailProduct = () => {
  return (
    <div>
      <ImageList></ImageList>
      <ProductInfo></ProductInfo>
      <RecommandProductList></RecommandProductList>
    </div>
  );
};

export default DetailProduct;
