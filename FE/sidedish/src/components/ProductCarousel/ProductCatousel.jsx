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

const SliderWrap = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const slideSettings = {
  infinite: true,
  speed: 500,
  slidesToScroll: 4,
  slidesToShow: 4,
};

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

  if (loading) {
    return (
      <SliderWrap>
        <Skeleton count={4} circle={true} height={215} width={215} />
      </SliderWrap>
    );
  }

  if (!products) return null;

  return (
    <SliderWrap>
      <Slider {...slideSettings}>
        {products.map((item) => (
          <div style={{ width: 215 }}>
            <Product item={item} key={item.detail_hash}></Product>
          </div>
        ))}
      </Slider>
    </SliderWrap>
  );
};

export default ProductCarousel;
