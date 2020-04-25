import React from "react";
import styled from "@emotion/styled";

const Container = styled.dl`
  padding: 16px 10px 12px 10px;
  text-align: center;
`;

const ProductTitle = styled.dt``;

const ProductDescription = styled.dd``;

const ProductPrice = styled.dd``;

const SellingPrice = styled.p``;

const OriginPrice = styled.p``;

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
