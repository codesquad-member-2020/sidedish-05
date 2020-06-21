import React from "react";
import styled from "@emotion/styled";

const ImageSection = styled.img`
  width: 100%;
`;

const RecommandProduct = ({ detailSection }) => {
  return (
    <div>
      {detailSection.map((detail, index) => (
        <ImageSection src={detail} key={index}></ImageSection>
      ))}
    </div>
  );
};

export default RecommandProduct;
