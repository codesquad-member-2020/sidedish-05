import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageList from "./ImageList";
import ProductInfo from "./ProductInfo";
import RecommandProductList from "./RecommandProductList";
import { API_URL } from "../../../common/config";

const DetailProduct = ({ hash }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_URL.detail}${hash}`);
      console.log(response.data.data);
      setInfo(response.data.data);
    };
    fetchData();
  }, [hash]);

  if (!info) return null;
  console.log(info);

  return (
    <div>
      <ImageList imagedata={info.top_image}></ImageList>
      <ProductInfo></ProductInfo>
      <RecommandProductList></RecommandProductList>
    </div>
  );
};

export default DetailProduct;
