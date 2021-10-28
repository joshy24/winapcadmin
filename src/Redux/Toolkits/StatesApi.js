import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const stateHeaders = {
    "Content-Type": "application/json",
}

const baseUrl = 'https://win-apc.herokuapp.com/api';

const createRequest = (url, headers) => ({url, headers: stateHeaders})

export const stateApi = createApi({
    reducerPath: 'stateApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getStates: builder.query({
            // query: () => '/states'
            query:() => createRequest('/state')
        })
    })
})

export const {
    useGetStatesQuery, 
} = stateApi;