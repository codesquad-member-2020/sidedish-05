import React from "react";
import styled from "@emotion/styled";

const SubListWrap = styled.ul`
  width: 162px;
  position: absolute;
  left: 0;
  top: 52px;
  padding: 20px 0 31px;
  font-family: "Nanum", sans-serif;
  background: #fff;
  border: 1px solid rgba(72, 63, 53, 0.6);
  border-top: none;
  z-index: 1000;
`;

const SubList = styled.li`
  text-align: left;
  color: #555;
  padding: 5px;
  font-weight: normal;
  &:hover {
    text-decoration: underline;
    color: #6fd9d6;
    font-weight: 600;
  }
`;

const CategoryDetail = ({ contents }) => {
  return (
    <div>
      <SubListWrap>
        {contents.map((content, index) => (
          <SubList key={index}>{content}</SubList>
        ))}
      </SubListWrap>
    </div>
  );
};

export default CategoryDetail;
