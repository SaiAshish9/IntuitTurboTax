import React from "react";
import { Container, Content } from "./styles";

const PopOver = ({ setShowDropDown }) => {

  return (
    <Container
      onMouseEnter={() => {
        setShowDropDown(true);
      }}
      onMouseLeave={() => {
        setShowDropDown(false);
      }}
    >
      <Content>Español</Content>
    </Container>
  );
};

export default PopOver;
