import React, { useState, createContext } from "react";

export const CreateContext = createContext();

export const CreateContextProvider = (props) => {
  const [number, setNumber] = useState(0);
  console.log(typeof number);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <CreateContext.Provider value={{ number, setNumber, increase, decrease }}>
      {props.children}
    </CreateContext.Provider>
  );
};
