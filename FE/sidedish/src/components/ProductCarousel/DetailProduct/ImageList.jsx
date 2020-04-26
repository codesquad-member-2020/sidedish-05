import React from "react";
import styled from "@emotion/styled";

const Image = styled.img`
  width: 250px;
`;

const ImageList = ({ imagedata }) => {
  console.log(imagedata);
  return (
    <div>
      <Image src={imagedata}></Image>
    </div>
  );
};

export default ImageList;
