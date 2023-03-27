import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://course-api.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (products) => "/react-store-products",
      transformResponse: (response) => {
        const featuredProducts = response.filter((product) => product.featured);
        return { products: response, featuredProducts };
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = shopApi;
