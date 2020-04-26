import React from "react";
import styled from "@emotion/styled";

const ImageListContainer = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 90%;
`;

const ImageList = ({ topImage, thumbImage }) => {
  return (
    <ImageListContainer>
      <Image src={topImage}></Image>
    </ImageListContainer>
  );
};

export default ImageList;
