import { apiSlice } from "./apiSlice";
import { PRODUCTS_URL } from "../constants";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL
      }),
      keepUnusedDataFor: 5
    }),getProductDetails: builder.query({
      query:(id) => ({
        url :`${PRODUCTS_URL}/${id}`
      }),
      keepUnusedDataFor:5
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: PRODUCTS_URL,
        method: 'POST'
      }),
      invalidatesTags: ['Product']
    })
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation } = productApiSlice;
