import React from "react";
import styled from "@emotion/styled";
import mainLogo from "./main-logo.png";

const MainLogo = styled.img``;

const SearchBar = styled.form``;

const InputSearch = styled.input``;

const SubmitButton = styled.button``;

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
        <LinkBest />
        <LinkPromotion />
      </MainNaviBar>
    </>
  );
};

export default HeaderMainContent;
