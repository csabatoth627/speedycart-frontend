import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderDetailsQuery } from "../slices/orderApiSlice";
import { Button, Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import Message from "../components/Message";
import Loading from "../components/Loading";

const OrderScreen = () => {
  const { id: orderId } = useParams();
  const { data: order, isLoading, error } = useGetOrderDetailsQuery(orderId);
  console.log(order);
  

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Message variant="danger" />
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
          <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address: </strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong> {order.paymentMethod}
              </p>
            
              {order.isPaid ? (
                <Message variant='success'>
                  Paid on {order.paidAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>{item.name}</Col>
                        <Col>
                          {item.qty} x ${item.price} ={" "}
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item.price * item.qty)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items:</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax:</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                Pay order!!!
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
