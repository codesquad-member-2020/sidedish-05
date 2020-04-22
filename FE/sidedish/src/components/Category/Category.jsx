import React from "react";
import styled from "@emotion/styled";
import CategoryDetail from "./CategoryDetail";

const categories = [
  {
    name: "sidedish",
    title: "밑반찬",
  },
  {
    name: "soup",
    title: "국ㆍ찌개",
  },
  {
    name: "maindish",
    title: "메인반찬",
  },
  {
    name: "kiddish",
    title: "아이반찬",
  },
  {
    name: "reqularmeal",
    title: "정기식단",
  },
  {
    name: "fresh",
    title: "신선ㆍ가공",
  },
  {
    name: "snack",
    title: "간식",
  },
  {
    name: "brand",
    title: "브랜드관",
  },
];

const NaviWrap = styled.div`
  position: relative;
  z-index: 100;
  background: #483f35;
  align-items: center;
  display: flex;
  height: 52px;
`;

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 980px;
  height: inherit;
  margin: 0 auto;
  overflow: visible;
`;

const Category = styled.div`
  height: 95%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  color: #fff;
  font-size: 14px;
  &:hover {
    color: #6fd9d6;
    background: #fff;
    outline: 1px solid #000;
    font-weight: 600;
    box-sizing: border-box;
    transform: translateY(5%);
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <NaviWrap>
      <CategoryBlock>
        {categories.map((category) => (
          <Category key={category.name}>{category.title}</Category>
        ))}
        <CategoryDetail></CategoryDetail>
      </CategoryBlock>
    </NaviWrap>
  );
};

export default Categories;
