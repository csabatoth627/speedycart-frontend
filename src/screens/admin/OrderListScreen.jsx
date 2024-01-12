import React from "react";
import { useGetOrdersQuery } from "../../slices/orderApiSlice";
import { Table } from "react-bootstrap";
import Loading from "../../components/Loading";
import Message from "../../components/Message";

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr></tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
          </thead>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
