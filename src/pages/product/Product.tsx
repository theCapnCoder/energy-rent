import React from "react";
import { Single } from "../../components/single";
import { singleProduct } from "../../data/data";

export const Product = () => {
  return <Single {...singleProduct} />;
};
