import React from "react";
import styled from "@emotion/styled";

const ImageListContainer = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 90%;
  margin-bottom: 5px;
`;

const ThumbnailContainer = styled.div`
  width: 90%;
`;

const Thumbnail = styled.img`
  width: 24%;
  background-color: #5d5d5d;
  & + & {
    margin-left: 1%;
  }
`;

const ImageList = ({ topImage, thumbImage }) => {
  return (
    <ImageListContainer>
      <Image src={topImage}></Image>
      <ThumbnailContainer>
        {thumbImage.map((image, index) => (
          <Thumbnail src={image} key={index} />
        ))}
      </ThumbnailContainer>
    </ImageListContainer>
  );
};

export default ImageList;
