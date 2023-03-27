import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://course-api.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (name) => "/react-store-products",
    }),
  }),
});

export const { useGetAllProductsQuery } = shopApi;
