import React from "react";
import styled from "@emotion/styled";
import Categories from "./Category";
import categoryData from "./categoryData";

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
  justify-content: space-around;
  width: 980px;
  height: inherit;
  margin: 0 auto;
  overflow: visible;
`;

const CategoryLsit = () => {
  return (
    <NaviWrap>
      <CategoryBlock>
        {categoryData.map((category, index) => (
          <Categories category={category} key={index}></Categories>
        ))}
      </CategoryBlock>
    </NaviWrap>
  );
};

export default CategoryLsit;
