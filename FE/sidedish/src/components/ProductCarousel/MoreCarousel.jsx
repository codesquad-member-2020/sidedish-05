import React, { useState } from "react";
import styled from "@emotion/styled";
import ProductCarousel from "./ProductCarousel";
import arrowNext from "./navigate_next.png";
import { API_URL } from "../../common/config";

const MoreButton = styled.button`
  margin: 38px auto 50px;
  padding: 17px 0 15px;
  width: 958px;
  text-align: center;
  font-size: 16px;
  color: #444;
  border: 1px solid #d7d7d7;
  &:hover {
    border: 1px solid #7d7d7d;
  }
`;

const ButtonText = styled.span`
  padding-right: 34px;
  background: url(${arrowNext}) no-repeat 100%;
`;

const MoreCarousel = () => {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);

  return (
    <>
      <MoreButton onClick={onClick}>
        <ButtonText>{"반찬 전체보기"}</ButtonText>
      </MoreButton>
      {showResults ? <ProductCarousel api={API_URL.side} /> : null}
    </>
  );
};

export default MoreCarousel;
