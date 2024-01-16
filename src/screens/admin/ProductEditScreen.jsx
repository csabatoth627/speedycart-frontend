import React, { useEffect, useState } from "react";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
} from "../../slices/productApiSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import Loading from "../../components/Loading";
import Message from "../../components/Message";
import { Form } from "react-bootstrap";

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategpry] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategpry(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loading/>}
        {isLoading ? <Loading/> : error ? <Message variant="danger">{error}</Message> : (<Form>
            
        </Form>)}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
