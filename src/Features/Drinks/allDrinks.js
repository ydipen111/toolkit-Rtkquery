import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const drinksApi = createApi({
  reducerPath: 'drinksApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'www.thecocktaildb.com/api/json/v1/1' }),

  endpoints: (builder) => ({

    GetDrinks: builder.query({
      query: () => ({
        url: '/list.php',
        params: {
          c: 'list'
        },
        method: 'GET'
      }),
    }),



    GetDrinksDetails: builder.query({
      query: () => ({
        url: '/list.php',
        params: {
          c: 'list'
        },
        method: 'GET'
      }),
    }),



  })
})
export const { useGetDrinksDetailsQuery, useGetDrinksQuery } = drinksApi;