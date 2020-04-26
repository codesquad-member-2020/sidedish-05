import React from "react";
import styled from "@emotion/styled";

const InfoContainer = styled.div`
  display: 60%;
`;

const Title = styled.h2`
  font-size: 24px;
  padding-bottom: 18px;
`;

const Description = styled.p`
  font-size: 13px;
  padding-bottom: 20px;
`;

const PriceInfoContainer = styled.div`
  display: flex;
  width: 90%;
`;

const PriceInfoTitle = styled.div`
  width: 50%;
`;

const InfoTitle = styled.div`
  margin-bottom: 10px;
  color: #7c7b7b;
  font-size: 14px;
  &:nth-of-type(2) {
    margin-bottom: 26px;
  }
`;

const InfoContent = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
`;

const Price = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  width: 90%;
  border-bottom: 0.5px solid #e6e1e1;
  padding-bottom: 20px;
`;

const ProductInfo = ({ info }) => {
  const { product_description, point, delivery_info, delivery_fee, prices } = info;

  return (
    <InfoContainer>
      <Title>[집밥의 완성] 두부시개리조림 200g</Title>
      <Description>{product_description}</Description>
      <PriceInfoContainer>
        <PriceInfoTitle>
          <InfoTitle>적립금</InfoTitle>
          <InfoTitle>배송정보</InfoTitle>
          <InfoTitle>배송비</InfoTitle>
        </PriceInfoTitle>
        <div>
          <InfoContent>{point}</InfoContent>
          <InfoContent>{delivery_info}</InfoContent>
          <InfoContent>{delivery_fee}</InfoContent>
        </div>
      </PriceInfoContainer>
      <Price>{prices[0]}</Price>
    </InfoContainer>
  );
};

export default ProductInfo;
