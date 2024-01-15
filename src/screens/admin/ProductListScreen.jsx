import React from 'react'
import { useGetProductsQuery } from '../../slices/productApiSlice'

const ProductListScreen = () => {
    const {data: products, isLoading, error} = useGetProductsQuery();
    console.log(products);


  return (
    <div>ProductListScreen</div>
  )
}

export default ProductListScreen