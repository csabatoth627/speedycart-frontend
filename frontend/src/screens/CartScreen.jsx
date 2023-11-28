import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ListGroup,
  Row,
  Col,
  Image,
  Form,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Message from "../components/Message";

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col md={8}>
        <h1 style={{marginBottom:'20px'}}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty! <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
                <ListGroupItem key={item._id}>
                    <Row>
                        <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded/>
                        </Col>
                        <Col md={4}>
                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                        </Col>
                        <Col md={2}>
                            ${item.price}
                        </Col>
                    </Row>
                </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default CartScreen;
