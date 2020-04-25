import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import ImageList from "./ImageList";
import ProductInfo from "./ProductInfo";
import RecommandProductList from "./RecommandProductList";

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
