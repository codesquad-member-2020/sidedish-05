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
  width: 300px;
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

const MainNaviBar = styled.ul`
  display: flex;
`;

const Link = styled.li`
  cursor: pointer;
  font-size: 27px;
  font-weight: 600;
  & + & {
    margin-left: 25px;
  }
  .desc {
    font-size: 12px;
    color: #6fd9d6;
    text-align: center;
    font-weight: 600;
  }
`;

const HeaderMainContent = () => {
  return (
    <>
      <MainLogo src={mainLogo} />
      <SearchBar>
        <InputSearch />
        <SubmitButton />
      </SearchBar>
      <MainNaviBar>
        <Link>
          <p className="desc">제일 잘 팔리는</p>베스트
        </Link>
        <Link>
          <p className="desc">놓치면 후회</p>이벤트
        </Link>
      </MainNaviBar>
    </>
  );
};

export default HeaderMainContent;
