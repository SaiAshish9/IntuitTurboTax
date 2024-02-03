import React, { useState } from "react";

import {
  LanguageDropdownContent,
  LanguageDropdownText,
  LanguageDropdownIcon,
  LanguageDropdownContainer,
} from "./styles";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { PopOver } from "./components";

import { withRouter } from "react-router-dom";

function obtainLanguageBasedOnPathname(pathname) {
  switch (pathname) {
    case "/":
    case "/en":
      return "En";
    case "/es":
      return "Es";
    default:
      return "En";
  }
}

const LanguageDropdown = ({ history }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const pathname = history.location.pathname;
  const language = obtainLanguageBasedOnPathname(pathname);
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  return (
    <LanguageDropdownContainer>
      <LanguageDropdownContent
        onClick={() => {
          setShowDropDown(true);
        }}
        onMouseLeave={() => {
          setShowDropDown(false);
        }}
      >
        <LanguageDropdownText>{selectedLanguage}</LanguageDropdownText>
        <LanguageDropdownIcon>
          <MdOutlineKeyboardArrowDown size={18} />
        </LanguageDropdownIcon>
      </LanguageDropdownContent>
      {showDropDown && (
        <PopOver
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
          setShowDropDown={setShowDropDown}
        />
      )}
    </LanguageDropdownContainer>
  );
};

export default withRouter(LanguageDropdown);
