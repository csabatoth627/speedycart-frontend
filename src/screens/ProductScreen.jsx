import React from "react";
import { addItemToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";
import Loading from "../components/Loading";
import Message from "../components/Message";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const { id: productId } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductDetailsQuery(productId);
  
  const addToCartHandler = () => {
      dispatch(addItemToCart({...product,qty}))
      navigate("/cart")
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {error ? (
        <Message>{error?.data?.message || error.error}</Message>
      ) : isLoading ? (
        <Loading />
      ) : product ? (
        <>
          <Row>
            <Col md={5}>
              {<Image src={product.image} alt={product.name} fluid />}{" "}
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
                <ListGroupItem>
                  Description: {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  {product.countInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (num) => (
                                <option key={num + 1} value={num + 1}>
                                  {num + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )}
                  <ListGroupItem>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default ProductScreen;
