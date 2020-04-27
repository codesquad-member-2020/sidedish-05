import React from "react";
import styled from "@emotion/styled";
import mainLogo from "./main-logo.png";
import searchIcon from "./search.png";

const MainLogo = styled.img`
  margin-left: 16px;
`;

const SearchBar = styled.form`
  margin-left: 40px;
  position: relative;
`;

const InputSearch = styled.input`
  border: 1px solid #cfd0d2;
  width: 210px;
  height: 40px;
  padding: 0 38px 0 15px;
  color: #888;
`;

const SubmitButton = styled.button`
  background: url(${searchIcon}) no-repeat center 0;
  width: 38px;
  height: 38px;
  text-indent: -3000px;
  position: absolute;
  top: 11px;
  right: 1px;
  opacity: 0.4;
`;

const MainNaviBar = styled.ul``;

const LinkBest = styled.li``;

const LinkPromotion = styled.li``;

const HeaderMainContent = () => {
  return (
    <>
      <MainLogo src={mainLogo} />
      <SearchBar>
        <InputSearch />
        <SubmitButton />
      </SearchBar>
      <MainNaviBar>
        <LinkBest>베스트</LinkBest>
        <LinkPromotion>이벤트</LinkPromotion>
      </MainNaviBar>
    </>
  );
};

export default HeaderMainContent;
