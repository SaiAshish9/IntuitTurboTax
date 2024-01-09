import React from "react";
import { NavOptions, NavOptionsContainer, ContentWrapper } from "./styles";

import { Banner, NavLinks, AuthOptions, LanguageDropdown } from "./components";

const Header = () => {
  return (
    <>
      <Banner />
      <NavOptionsContainer>
        <ContentWrapper>
          <NavLinks />
        </ContentWrapper>
        <NavOptions>
          <LanguageDropdown />
          <ContentWrapper>
            <AuthOptions />
          </ContentWrapper>
        </NavOptions>
      </NavOptionsContainer>
    </>
  );
};

export default Header;
