import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import Product from "./Product";
// import usePromise from "../../lib/usePromise";
import arrowNext from "./navigate_next.png";
import arrowPrev from "./navigate_before.png";

const ProductCarousel = ({ api }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(api);
      setProducts(response.data.body);
      setLoading(false);
    };
    fetchData();
  }, [api]);

  if (!products) return null;

  return (
    <>
      <Slider>
        {products.map((item) => (
          <div style={{ width: 215 }}>
            <Product item={item} key={item.detail_hash}></Product>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ProductCarousel;
