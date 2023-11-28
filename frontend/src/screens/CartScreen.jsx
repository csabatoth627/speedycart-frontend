import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";
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
import { FaTrash } from "react-icons/fa";

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = async (product, qty) => {
    dispatch(addItemToCart({ ...product, qty }));
  };

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
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
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={4}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(item.price * item.qty)} 
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) => {
                        addToCartHandler(item, Number(e.target.value));
                      }}
                    >
                      {[...Array(item.countInStock).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="danger">
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $ (
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              )
            </ListGroupItem>
            <ListGroupItem>
              <Button type="button" variant="primary">
                Proceed To Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
