import React from "react";
import styled from "@emotion/styled";
import LocalNaviBar from "./LocalNaviBar";

const HeaderBlock = styled.div`
  width: 100%;
`;

const HeaderMenu = styled.div`
  border-bottom: 1px solid #e9e9e9;
`;

const HeaderMain = styled.div``;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderMenu>
        <LocalNaviBar></LocalNaviBar>
      </HeaderMenu>
      <HeaderMain></HeaderMain>
    </HeaderBlock>
  );
};

export default Header;
