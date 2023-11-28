import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer: {
     /*  [baseAPi.reducerPath]: baseAPi.reducer,
      tasksSlice: tasksSlice,
      userSlice: userSlice, */
    },
    middleware: (getDefaultMiddleware) =>
      //getDefaultMiddleware().concat(baseAPi.middleware),
  });
  
  export default store;