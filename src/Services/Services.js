import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const allItemsApi = createApi({
  reducerPath: "allItems",
  baseQuery: fetchBaseQuery({baseUrl: `https://api.storerestapi.com` }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => "/products",
    }),
  })
})

export const { useGetAllItemsQuery } = allItemsApi;
