import React from "react";
import styled from "@emotion/styled";

const ImageListContainer = styled.div``;

const Image = styled.img`
  width: 250px;
`;

const ImageList = ({ topImage, thumbImage }) => {
  return (
    <ImageListContainer>
      <Image src={topImage}></Image>
    </ImageListContainer>
  );
};

export default ImageList;
