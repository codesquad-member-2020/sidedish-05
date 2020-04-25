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

const DeilveryTypeContainer = styled.div`
  opacity: 0;
  background-color: #000;
  height: 215px;
  width: 215px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    opacity: 0.7;
  }
`;

const DeilveryType = styled.div`
  text-align: center;
  color: white;
  font-size: 20px;
  width: inherit;
  margin: 10px 0;
`;

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
