import { configureStore, } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { allItemsApi } from "../Services/Services";

export const store = configureStore({
    reducer: { [allItemsApi.reducerPath]: allItemsApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(allItemsApi.middleware)
    
})

setupListeners(store.dispatch)