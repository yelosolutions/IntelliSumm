import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* export const articleApi, call it as a fuction and provide 'options object'
    note: must have a reducerPath - a string('articleApi')
*/
export const articleApi = createApi({
    reducerPath: 'articleApi',
});



//article is one specific part of a state of a global store
/* export const articleApi, call it as a fuction and provide 'options object'
    note: must have a reducerPath - a string('articleApi')
*/
//LATER - add a base query and endpoints to call