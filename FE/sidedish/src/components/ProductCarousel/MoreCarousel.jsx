import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import ProductCarousel from "./ProductCarousel";
import arrowNext from "./navigate_next.png";
import { API_URL } from "../../common/config";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

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

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div ref={endRef}>
      {!showResults && (
        <Container>
          <MoreButton onClick={onClick}>
            <ButtonText>{"반찬 전체보기"}</ButtonText>
          </MoreButton>
        </Container>
      )}
      {showResults && <ProductCarousel api={API_URL.side} />}
    </div>
  );
};

export default MoreCarousel;
