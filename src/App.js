import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import tosin from "./myself-removebg.png";
import "./styles.css";
import styled from "styled-components";
// import { CreateContextProvider } from "./context/CounterContext";
import React from "react";
import { useContext } from "react";
import { CreateContext } from "./context/CounterContext";

export default function App() {
  const { number, setNumber, increase, decrease } = useContext(CreateContext);
  const style = {
    textDecoration: "underline"
  };

  const styleImage = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "100%",
    border: "3px solid #d0d0d0"
  };
  return (
    <div className="App">
      {/* <CreateContextProvider> */}
      <h1>Use Context API TUTORIAL</h1>
      <img style={styleImage} src={tosin} alt="avatar" />
      <h2 style={style}>This would be done by creating a counter app</h2>
      <Counter />
      <Wrap>
        <Button funct={decrease} variable={"-1"} />
        <p>Step Size</p>
        <Button funct={increase} variable={"+1"} />
      </Wrap>
      {/* </CreateContextProvider> */}
    </div>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
