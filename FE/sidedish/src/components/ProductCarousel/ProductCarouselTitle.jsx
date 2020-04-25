import React from "react";
import styled from "@emotion/styled";

const Container = styled.div``;

const Title = styled.h2``;

const Description = styled.h3``;

const ProductCarouselTitle = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default ProductCarouselTitle;
