import React from "react";

import {
  NavOptions,
  NavImg,
  NavTextOption,
  NavTextContent,
} from "../../styles";

import NavLinkOptions from "./data";

const NavLinks = () => {
  return (
    <NavOptions>
      <NavImg
        src="https://digitalasset.intuit.com/IMAGE/A4H7Z5lhp/tt-logo-50-50-color.svg"
        alt="img"
      />
      <NavTextContent>
        {NavLinkOptions.map((option) => (
          <NavTextOption key={option.title}>{option.title}</NavTextOption>
        ))}
      </NavTextContent>
    </NavOptions>
  );
};

export default NavLinks;
