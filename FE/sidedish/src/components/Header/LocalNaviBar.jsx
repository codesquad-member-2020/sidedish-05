import React from "react";
import styled from "@emotion/styled";
import headerData from "./headerData";

const LocalNaviBarContainer = styled.div``;

const Navigation = styled.div``;

const LocalNaviBar = () => {
  return (
    <LocalNaviBarContainer>
      {headerData.map((header, index) => (
        <Navigation key={index}>{header.name}</Navigation>
      ))}
    </LocalNaviBarContainer>
  );
};

export default LocalNaviBar;
