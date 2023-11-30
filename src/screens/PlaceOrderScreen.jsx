import React from 'react'
import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        if(!cart.shippingAddress.addres){
            navigate("/shipping")
        } else if(!cart.paymentMethod){
            navigate("/payment")
        }
    }, [cart.shippingAddress.addres,cart.paymentMethod, navigate])
  return (
    <>
    <CheckoutSteps step1 step2 step3 step4/>
    <Row>
        <Col>
        </Col>
        <Col>
        </Col>
    </Row>
    </>
  )
}

export default PlaceOrderScreen