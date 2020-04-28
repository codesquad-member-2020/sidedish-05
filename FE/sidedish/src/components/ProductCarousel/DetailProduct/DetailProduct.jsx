import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import ImageList from "./ImageList";
import ProductInfo from "./ProductInfo";
// import RecommandProductList from "./RecommandProductList";
import { API_URL } from "../../../common/config";

const DetailProductContainer = styled.div`
  display: flex;
`;

const DetailProduct = ({ hash }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_URL.detail}${hash}`);
      setInfo(response.data.data);
    };
    fetchData();
  }, [hash]);

  if (!info) return null;

  const { main_Image, thumb_image } = info;

  return (
    <DetailProductContainer>
      <ImageList topImage={main_Image} thumbImage={thumb_image}></ImageList>
      <ProductInfo info={info}></ProductInfo>
      {/* <RecommandProductList></RecommandProductList> */}
    </DetailProductContainer>
  );
};

export default DetailProduct;
