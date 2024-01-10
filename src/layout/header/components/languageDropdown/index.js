import React, { useState } from "react";

import {
  LanguageDropdownContent,
  LanguageDropdownText,
  LanguageDropdownIcon,
  LanguageDropdownContainer,
} from "./styles";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { PopOver } from "./components";

const LanguageDropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false);

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
        <LanguageDropdownText>En</LanguageDropdownText>
        <LanguageDropdownIcon>
          <MdOutlineKeyboardArrowDown size={18} />
        </LanguageDropdownIcon>
      </LanguageDropdownContent>
      {showDropDown && (
        <PopOver
          setShowDropDown={setShowDropDown}
        />
      )}
    </LanguageDropdownContainer>
  );
};

export default LanguageDropdown;
