//this is one specific part of a state of a Global Store.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


/* export const articleApi, call it as a fuction and provide 'options object'
    note: must have a reducerPath - a string('articleApi')
*/
export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;



//article is one specific part of a state of a global store
/* export const articleApi, call it as a fuction and provide 'options object'
    note: must have a reducerPath - a string('articleApi')
*/
//LATER - add a base query and endpoints to call