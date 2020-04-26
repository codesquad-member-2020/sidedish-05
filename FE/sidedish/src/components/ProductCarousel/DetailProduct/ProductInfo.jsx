import React from "react";
import styled from "@emotion/styled";

const InfoContainer = styled.div`
  display: 60%;
`;

const Title = styled.h2``;

const Description = styled.p``;

const Point = styled.div``;

const DeliveryInfo = styled.div``;

const DeliveryFee = styled.div``;

const Price = styled.div``;

const ProductInfo = ({ info }) => {
  const { product_description, point, delivery_info, delivery_fee, prices } = info;

  return (
    <InfoContainer>
      <Title>[집밥의 완성] 두부시개리조림 200g</Title>
      <Description>{product_description}</Description>
      <Point>{point}</Point>
      <DeliveryInfo>{delivery_info}</DeliveryInfo>
      <DeliveryFee>{delivery_fee}</DeliveryFee>
      <Price>{prices[0]}</Price>
    </InfoContainer>
  );
};

export default ProductInfo;
