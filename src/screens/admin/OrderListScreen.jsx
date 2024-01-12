import React from 'react'
import { useGetOrdersQuery } from '../../slices/orderApiSlice'

const OrderListScreen = () => {
  const {data: orders, isLoading, error} = useGetOrdersQuery()
  
  return (
    <div>OrderListScreen</div>
  )
}

export default OrderListScreen