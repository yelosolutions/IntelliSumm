import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';



export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});


/*Analogy: If Global Store is a whole cake, then a 'reducer' allows 
to get a specific piece of that cake.
- reducer - Reduces entire state to only grab what is needed.
- middleware - Allows me to do something with a state before getting it

Pass 'articleApi.middleware' inside the getDefaultMiddleware().concat() to make 
reducer work

    WHAT HAPPENNED
 * Configuring a store(after updating the main.jsx file)
 * A store is a global state that stores entire info 
    about the app (not needed mostly)
 * Reduce it to a piece(articleApi) using reducer
    
    REMEMBER:READ official DOCUMENTATION -redux-toolkit store
 */