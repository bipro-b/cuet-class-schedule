import { configureStore } from "@reduxjs/toolkit";
import baseAPi from "./features/api/baseApi";
import tasksSlice from "./features/tasks/tasksSlice";



const store = configureStore({
    reducer: {
      [baseAPi.reducerPath]: baseAPi.reducer,
      tasksSlice: tasksSlice,
      // userSlice: userSlice, 
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseAPi.middleware),
  });
  
  export default store;