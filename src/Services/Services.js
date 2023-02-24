import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const allItemsApi = createApi({
  reducerPath: "allItems",
  baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => "/products/categories",
    }),
  })
})

export const { useGetAllItemsQuery } = allItemsApi;