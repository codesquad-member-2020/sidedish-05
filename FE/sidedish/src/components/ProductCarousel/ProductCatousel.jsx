import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import Slider from "react-slick";
import Product from "./Product";

const ProductCarousel = () => {
  return (
    <div>
      <Slider>
        <div>
          <Product></Product>
        </div>
      </Slider>
    </div>
  );
};

export default ProductCarousel;
