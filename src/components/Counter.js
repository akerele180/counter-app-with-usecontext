import React, { useContext } from "react";
import { CreateContext } from "../context/CounterContext";

export const Counter = () => {
  const { number, setNumber } = useContext(CreateContext);
  return (
    <>
      <h3
        onClick={(number) => {
          console.log(number);
          // setNumber(number + 1);
        }}
      >
        Current count is: {number}
      </h3>
    </>
  );
};
