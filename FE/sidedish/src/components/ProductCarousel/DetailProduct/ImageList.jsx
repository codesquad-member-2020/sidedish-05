import React, { useState } from "react";
import styled from "@emotion/styled";

const ImageListContainer = styled.div`
  width: 45%;
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
  const [hover, setHover] = useState(null);

  return (
    <ImageListContainer>
      {!hover && <Image src={topImage}></Image>}
      {hover && <Image src={hover}></Image>}
      <ThumbnailContainer>
        {thumbImage.map((image, index) => (
          <Thumbnail onMouseEnter={() => setHover(image)} src={image} key={index} />
        ))}
      </ThumbnailContainer>
    </ImageListContainer>
  );
};

export default ImageList;
