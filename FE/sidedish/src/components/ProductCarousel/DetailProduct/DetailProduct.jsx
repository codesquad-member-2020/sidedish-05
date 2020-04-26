import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageList from "./ImageList";
import ProductInfo from "./ProductInfo";
// import RecommandProductList from "./RecommandProductList";
import { API_URL } from "../../../common/config";

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

  const { top_image, thumb_images } = info;

  return (
    <div>
      <ImageList topImage={top_image} thumbImage={thumb_images}></ImageList>
      <ProductInfo info={info}></ProductInfo>
      {/* <RecommandProductList></RecommandProductList> */}
    </div>
  );
};

export default DetailProduct;
