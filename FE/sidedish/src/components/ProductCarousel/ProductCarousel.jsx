import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";
import Product from "./Product/Product";
import ProductCarouselTitle from "./ProductCarouselTitle";
// import usePromise from "../../lib/usePromise";
import arrowNext from "./navigate_next.png";
import arrowPrev from "./navigate_before.png";

const SliderWrap = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const NextArrow = styled.div`
  display: block;
  background: url(${arrowNext});
  height: 30px;
  width: 30px;
  &::before {
    content: "";
  }
`;

const PrevArrow = styled.div`
  display: block;
  background: url(${arrowPrev});
  height: 30px;
  width: 30px;
  &::before {
    content: "";
  }
`;

const slideSettings = {
  infinite: true,
  speed: 500,
  slidesToScroll: 4,
  slidesToShow: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const ProductCarousel = ({ api }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(api);
      setProducts(response.data.data);
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
    <>
      <ProductCarouselTitle
        title={products.category_name}
        description={products.category_description}
      ></ProductCarouselTitle>
      <SliderWrap>
        <Slider {...slideSettings}>
          {products.sidedish.map((item) => (
            <div style={{ width: 215 }}>
              <Product item={item} key={item.sidedish_id}></Product>
            </div>
          ))}
        </Slider>
      </SliderWrap>
    </>
  );
};

export default ProductCarousel;
