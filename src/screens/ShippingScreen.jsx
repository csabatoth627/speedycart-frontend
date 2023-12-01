import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../slices/cartSlice";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = () => {
  const { shippingAddress  } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2/>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Enter your address"
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            placeholder="Enter your city"
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPostalCode">
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            placeholder="Enter your postal code"
            type="text"
            value={postalCode}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            placeholder="Enter your country"
            type="text"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
