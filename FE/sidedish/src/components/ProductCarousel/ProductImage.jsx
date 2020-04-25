import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 215px;
  opacity: 1;
  backface-visibility: hidden;
  &:hover {
    opacity: 0.3;
  }
`;

const DeilveryTypeContainer = styled.div``;

const DeilveryType = styled.div``;

const ProductImage = ({ imgdata }) => {
  const { image, title, delivery_type } = imgdata;

  return (
    <Container>
      <Image src={image} alt={title}></Image>
      <DeilveryTypeContainer className="delivery">
        {delivery_type.map((type) => (
          <DeilveryType>{type}</DeilveryType>
        ))}
      </DeilveryTypeContainer>
    </Container>
  );
};

export default ProductImage;
