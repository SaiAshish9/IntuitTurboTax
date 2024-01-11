import React from "react";
import { Container, Content } from "./styles";
import { withRouter } from "react-router-dom";

const PopOver = ({ setShowDropDown, setSelectedLanguage, selectedLanguage, history }) => {

  return (
    <Container
      onMouseEnter={() => {
        setShowDropDown(true);
      }}
      onMouseLeave={() => {
        setShowDropDown(false);
      }}
    >
      <Content
        onClick={() => {
          const language = selectedLanguage == "En" ? "Es" : "En";
          history.push("/" + (selectedLanguage != "En" ? "en" : "es"));
          setSelectedLanguage(language);
        }}
      >
        {selectedLanguage != "En" ? "English" : "Español"}
      </Content>
    </Container>
  );
};

export default withRouter(PopOver);
