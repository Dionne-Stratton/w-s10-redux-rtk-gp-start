import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

// store is the Redux store that holds the state of the app
// it is created with the configureStore function from Redux Toolkit
// the store has a todosState slice that is managed by the todosReducer function from todosSlice
export const store = configureStore({
  reducer: {
    // todosState is the slice of the store that manages the todos state with the todosReducer function
    //which contains the todosSlice reducer
    todosState: todosReducer,
  },
});
