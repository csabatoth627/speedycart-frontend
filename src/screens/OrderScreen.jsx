import React from 'react'
import { useParams } from 'react-router-dom'

const OrderScreen = () => {
    const {id} = useParams()
  return (
    <div>{id}</div>
  )
}

export default OrderScreen