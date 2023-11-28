import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
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
  import Message from '../components/Message';

const CartScreen = () => {
    const {cartItems} = useSelector((state) => state.cart)
    const dispatch = useDispatch()

  return (
<Row>
    <Col>
    <h1>Shopping Cart</h1>
    {cartItems.length === 0 ? (<Message>Your cart is empty! <Link to="/">Go Back</Link></Message>) :(<></>)}
    </Col>
</Row>  )
}

export default CartScreen