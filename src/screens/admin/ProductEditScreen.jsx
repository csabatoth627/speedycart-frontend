import React, { useState } from "react";
import { useGetProductDetailsQuery } from "../../slices/productApiSlice";
import { useParams } from "react-router-dom";

const ProductEditScreen = () => {
const {id: productId} = useParams()

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategpry] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const {data: product, isLoading, refetch, error} = useGetProductDetailsQuery(productId)

  console.log(product);

  return <div>ProductEditScreen</div>;
};

export default ProductEditScreen;
