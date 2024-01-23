import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
/*
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx'; // it may changes may app
import { Provider } from 'react-redux';
import store from './redux/store';
*/


import { Provider } from 'react-redux'
import store from "./redux/store.js";

// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 
     <React.StrictMode>
      <Provider store={store}>
       <RouterProvider router={routes} />
      </Provider>
    </React.StrictMode>
     */}

  <Provider store={store}>
    <App />
  </Provider>
  
  </React.StrictMode>
);
