import { styled } from "styled-components";

import { COLORS, STYLES, FONT_FAMILY } from "constants/index";

export const ContentWrapper = styled.div`
  ${STYLES.RBC}
  justify-content: flex-start;
  margin-top: 0px;
`;

export const NavOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const NavImg = styled.img`
  height: 32px;
  padding-left: 15px;
`;

export const NavTextOption = styled.p`
  margin-right: 30px;
  color: ${COLORS.tuna};
  font-family: ${FONT_FAMILY.Demi1};
  cursor: pointer;
  border-bottom: 2px solid ${COLORS.white};
  &:hover {
    color: ${COLORS.thunderBird};
    border-bottom: 2px solid ${COLORS.thunderBird};
  }
`;

export const NavTextContent = styled.div`
  padding-left: 48px;
  ${STYLES.RBC};
  align-items: flex-end;
  justify-content: flex-start;
`;

export const NavOptionsContainer = styled.div`
  ${STYLES.RBC};
  max-height: 70px;
  background-color: ${COLORS.white};
  display: flex;
  padding: 0 40px;
`;
