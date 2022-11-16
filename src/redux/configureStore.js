import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./books/books";
import categoriesReducer from "./categories/categories";

function combineReducers(){
    const rootReducer = combineReducers(
         bookReducer,
         categoriesReducer
    );
    return rootReducer;
}

export default combineReducers;