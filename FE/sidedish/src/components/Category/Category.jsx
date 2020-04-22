import React, { useState } from "react";
import styled from "@emotion/styled";
import CategoryDetail from "./CategoryDetail";

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
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ category }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <div>
      <Category onMouseEnter={toggleHover} onMouseLeave={toggleHover} key={category.name}>
        {category.title}
        {hover && <CategoryDetail contents={category.contents}></CategoryDetail>}
      </Category>
    </div>
  );
};

export default Categories;
