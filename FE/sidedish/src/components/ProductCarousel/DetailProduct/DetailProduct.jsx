import React from "react";
import styled from "@emotion/styled";
import ImageList from "./ImageList";
import ProductInfo from "./ProductInfo";
import RecommandProduct from "./RecommandProduct";
import usePromise from "../../../lib/usePromise";
import { API_URL } from "../../../common/config";

const DetailProductContainer = styled.div`
  display: flex;
`;

const DetailProduct = ({ hash }) => {
  const [loading, response, error] = usePromise(`${API_URL.detail}${hash}`);

  if (error) {
    return <>{console.error(error)}</>;
  }

  if (!response) return null;

  const { main_Image, thumb_image, detail_section } = response.data.data;

  return (
    <>
      <DetailProductContainer>
        <ImageList topImage={main_Image} thumbImage={thumb_image}></ImageList>
        <ProductInfo info={response.data.data}></ProductInfo>
      </DetailProductContainer>
      <RecommandProduct detailSection={detail_section}></RecommandProduct>
    </>
  );
};

export default DetailProduct;
