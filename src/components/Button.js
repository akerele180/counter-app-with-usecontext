import React from "react";

export const Button = ({ variable, funct }) => {
  console.log(variable, funct);
  return (
    <>
      <button
        onClick={funct}
        style={{
          cursor: "pointer",
          fontSize: "2em",
          margin: "0 15px",
          padding: "3px 28px"
        }}
      >
        {variable}
      </button>
    </>
  );
};
