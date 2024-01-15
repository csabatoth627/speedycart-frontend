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
                <FaEdit/>Create Product
            </Button>
        </Col>
      </Row>
    </>
  );
};

export default ProductListScreen;
