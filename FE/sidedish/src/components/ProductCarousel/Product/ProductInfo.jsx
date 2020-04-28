import React from "react";
import styled from "@emotion/styled";

const Container = styled.dl`
  padding: 16px 10px 12px 10px;
  text-align: center;
`;

const ProductTitle = styled.dt`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.07em;
  color: #000;
  width: 100%;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductDescription = styled.dd`
  width: 100%;
  font-size: 13px;
  color: #666;
  min-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductPrice = styled.dd`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SellingPrice = styled.p`
  font-size: 26px;
  color: #2ac1bc;
  font-weight: bold;
  vertical-align: middle;
  line-height: 1;
  letter-spacing: -0.04em;
  margin-right: 5px;
  &::after {
    content: "원";
    font-size: 20px;
  }
`;

const OriginPrice = styled.p`
  position: relative;
  top: 2px;
  font-size: 14px;
  color: #888;
  font-weight: normal;
  vertical-align: middle;
  text-decoration: line-through;
`;

const ProductInfo = ({ infodata }) => {
  const { title, description, n_price, s_price } = infodata;

  return (
    <Container>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>
        <OriginPrice>{s_price ? n_price : ""}</OriginPrice>
        <SellingPrice>{s_price ? s_price : n_price}</SellingPrice>
      </ProductPrice>
    </Container>
  );
};

export default ProductInfo;
