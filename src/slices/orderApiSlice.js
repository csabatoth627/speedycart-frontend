import { apiSlice } from "./apiSlice";
import { ORDERS_URL, PAYPAL_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: { ...data },
      }),
    }), getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`
      }),
      keepUnusedDataFor: 5
    }), payOrder: builder.mutation({
      query: ({orderId, details}) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: 'PUT',
        body: { ...details },
      })
    }), getPayPalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    })
  })
});

export const { useCreateOrderMutation,
  useGetOrderDetailsQuery,
  useGetPayPalClientIdQuery,
  usePayOrderMutation } = orderApiSlice
