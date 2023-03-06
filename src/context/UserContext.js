import React, { Children, createContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { value, dispatch } = UserReducer();
  return (
    <UserContext.Provider value={{ value, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
