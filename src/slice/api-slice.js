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
      providesTags: ({ products }, error, arg) =>
        products
          ? [...products?.map(({ id }) => ({ type: "Product", id })), "Product"]
          : ["Product"],
    }),
    getProduct: builder.query({
      query: (productId) => `/react-store-single-product?id=${productId}`,
      providesTags: (result, error, arg) => [{ type: "Product", id: arg.id }],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = shopApi;
