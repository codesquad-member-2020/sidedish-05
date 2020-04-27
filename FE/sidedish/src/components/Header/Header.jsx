import React from "react";
import styled from "@emotion/styled";
import LocalNaviBar from "./LocalNaviBar";
import HeaderMainContent from "./HeaderMainContent";

const HeaderBlock = styled.div`
  width: 100%;
`;

const HeaderMenu = styled.div`
  border-bottom: 1px solid #e9e9e9;
`;

const HeaderMain = styled.div`
  height: 98px;
  width: 980px;
  margin: 0 auto;
  display: flex;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderMenu>
        <LocalNaviBar />
      </HeaderMenu>
      <HeaderMain>
        <HeaderMainContent />
      </HeaderMain>
    </HeaderBlock>
  );
};

export default Header;
