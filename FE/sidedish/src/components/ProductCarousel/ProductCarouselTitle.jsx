import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 70px 0 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #999;
  font-size: 18px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 34px;
`;

const ProductCarouselTitle = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default ProductCarouselTitle;
