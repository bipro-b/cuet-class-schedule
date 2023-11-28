import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
/* 
Redux connections
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx'; // it may changes may app
import { Provider } from 'react-redux';
import store from './redux/store';

Another way

import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* 
     <React.StrictMode>
      <Provider store={store}>
       <RouterProvider router={routes} />
      </Provider>
    </React.StrictMode>
     */}

    {/* 
    Another way
    <Provider store={store}>
     <PersistGate loading ={null} persistor={persistor}>
      </PersistGate>
      <App/>
    </Provider>
      */}
  </React.StrictMode>
);
