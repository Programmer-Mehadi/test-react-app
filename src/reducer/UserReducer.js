import React, { useReducer } from "react";

const UserReducer = () => {
  const data = {
    user: { name: "Muhammad Mehadi", age: 25 },
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: { name: action.newData.name, age: action.newData.age },
        };
      default:
        return state;
    }
  };
  const [value, dispatch] = useReducer(reducer, data);
  return { value, dispatch };
};

export default UserReducer;
