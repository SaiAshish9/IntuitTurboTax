import React from "react";

import {
  LanguageDropdownContent,
  LanguageDropdownText,
  LanguageDropdownIcon,
  LanguageDropdownContainer,
} from "./styles";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { PopOver } from "./components";

const LanguageDropdown = () => {
  return (
    <LanguageDropdownContainer>
      <LanguageDropdownContent>
        <LanguageDropdownText>En</LanguageDropdownText>
        <LanguageDropdownIcon>
          <MdOutlineKeyboardArrowDown size={18} />
        </LanguageDropdownIcon>
      </LanguageDropdownContent>
      <PopOver />
    </LanguageDropdownContainer>
  );
};

export default LanguageDropdown;
