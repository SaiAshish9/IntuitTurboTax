import { styled } from "styled-components";

import { COLORS, FONT_FAMILY } from "constants/index";

export const LanguageDropdownContainer = styled.div`
  position: relative;
`;

export const LanguageDropdownContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 12px;
  height: 70px;
  &:hover {
    background-color: ${COLORS.athensGray};
  }
`;

export const LanguageDropdownText = styled.p`
  font-family: ${FONT_FAMILY.Regular1};
  padding: 0px;
  margin: 0px;
`;

export const LanguageDropdownIcon = styled.div`
  font-family: ${FONT_FAMILY.Regular1};
  position: relative;
  top: 4px;
`;
