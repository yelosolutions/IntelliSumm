import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';



export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});


/*Analogy: If Global Store is a whole cake, then a 'reducer' allows me 
to get a specific piece of that cake.
- reducer - Reduces entire state to only grab what I need.
- middleware - Allows me to do something with a state before getting it

What I pass inside the getDefaultMiddleware().concat() will make 
reducer work - that is 'articleApi.middleware'
    WHAT HAPPENNED
 * Configuring a store
 * A store is a global state that stores entire info 
    about the app (not needed mostly)
 * Reduce it to a piece(articleApi) using reducer
    
    REMEMBER:READ official DOCUMENTATION -redux-toolkit store
 */