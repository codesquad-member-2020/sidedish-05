import React from "react";
import styled from "@emotion/styled";

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
  padding-right: 14px;
  background: url("https://cdn.bmf.kr/web/main/btn_arr_more.png") no-repeat 100% 3px;
`;

const MoreCarousel = () => {
  return (
    <MoreButton>
      <ButtonText>{"반찬 전체보기"}</ButtonText>
    </MoreButton>
  );
};

export default MoreCarousel;
