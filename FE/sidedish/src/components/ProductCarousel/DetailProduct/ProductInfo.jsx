import React, { useState } from "react";
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

const CountContainer = styled.div`
  width: 90%;
  border-bottom: 0.5px solid #e6e1e1;
  padding: 20px 0;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Count = styled.div`
  width: 60px;
  height: 35px;
  border: 0.5px solid #e6e1e1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
`;

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  & .arrow-btn {
    cursor: pointer;
    border: 1px solid #e6e1e1;
    height: 50%;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  padding: 20px 0;
  & .total-price {
    font-size: 16px;
    font-weight: 600;
    margin-right: 30px;
  }
  & .select-price {
    font-size: 30px;
    font-weight: 600;
    color: #2ac1bc;
  }
`;

const AddButton = styled.button`
  width: 90%;
  height: 50px;
  background-color: #2ac1bc;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: 0.5px solid #e6e1e1;
  cursor: pointer;
`;

const ProductInfo = ({ info }) => {
  const { title, description, point, delivery_info, delivery_fee, s_price, n_price } = info;
  const [currCount, setCurrCount] = useState(1);

  const downCount = () => {
    if (currCount >= 10) return;
    setCurrCount(currCount + 1);
  };

  const upCount = () => {
    if (currCount <= 1) return;
    setCurrCount(currCount - 1);
  };

  const sellingPrice = s_price ? s_price : n_price;
  const selectPrice = (sellingPrice.split(",").join("") * currCount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <InfoContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
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
      <Price>{sellingPrice}</Price>
      <CountContainer>
        <p className="count-title">수량</p>
        <Count>
          {currCount}
          <ArrowContainer>
            <button className={"arrow-btn"} onClick={downCount}>
              &#710;
            </button>
            <button className={"arrow-btn"} onClick={upCount}>
              &#711;
            </button>
          </ArrowContainer>
        </Count>
        {/* <ErrorMessage></ErrorMessage> */}
      </CountContainer>
      <TotalPrice>
        <span className="total-price">총 상품금액</span>
        <p className="select-price">{selectPrice}</p>
      </TotalPrice>
      <AddButton>담기</AddButton>
    </InfoContainer>
  );
};

export default ProductInfo;
