import React from "react";
import { useGetProductsQuery } from "../../slices/productApiSlice";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import Loading from "../../components/Loading";
import Message from "../../components/Message";
import { LinkContainer } from "react-router-bootstrap";

const ProductListScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3">
            <FaEdit />
            Create Product
          </Button>
        </Col>
      </Row>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
