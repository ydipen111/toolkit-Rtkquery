import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recepieApi = createApi({
  reducerPath: "recepieApi",

  baseQuery: fetchBaseQuery({
    baseUrl: 'www.thecocktaildb.com/api/json/v1/1'
  }),

  endpoints: (builder) => ({

    getRecepie: builder.query({
      query: () => ({
        url: '/list.php',
        params: {
          c: 'list'
        },
        method: 'GET'
      }),
    }),
  }),

})

export const { useGetRecepieQuery } = recepieApi;