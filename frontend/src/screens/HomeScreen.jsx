import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Loading from "../components/Loading";

const HomeScreen = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  return (
    <>
      {error ? (
        <>{error?.data?.message || error.error}</>
      ) : isLoading ? (
        <Loading/>
      ) : products ? (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      ) : null}
    </>
  );
};

export default HomeScreen;
