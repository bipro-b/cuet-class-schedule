import React, { createContext } from "react";
import useFirebase from "./usefirebase.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Ensure that useFirebase is a valid React Hook
  const allContext = useFirebase();

  return (
    // Make sure AuthContext.Provider receives a valid value
    <AuthContext.Provider value={allContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
