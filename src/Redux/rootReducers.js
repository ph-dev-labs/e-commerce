import { combineReducers } from "@reduxjs/toolkit";
import { allItemsApi } from "./Services/Services";
export const rootReducer = combineReducers({

    [allItemsApi.reducerPath]: allItemsApi.reducer
})