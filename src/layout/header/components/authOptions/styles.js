import { styled } from "styled-components";

import { COLORS, FONT_WEIGHT, FONT_FAMILY } from "constants/index";

export const SignInButton = styled.div`
  padding: 7px 14px;
  background: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  font-size: 0.9rem;
  margin-left: 13px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: fit-content;
`;

export const SignInButtonText = styled.p`
  color: ${COLORS.white};
  font-family: ${FONT_FAMILY.Regular1};
  font-weight: ${FONT_WEIGHT.medium};
  margin: 0px;
  padding: 0px;
  padding-left: 6px;
`;

export const LockImage = styled.img`
  position: relative;
  bottom: 1px;
`;

export const SignUpButton = styled.div`
  padding: 7px 14px;
  color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  font-family: ${FONT_FAMILY.Regular1};
  font-size: 0.9rem;
  margin-left: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${COLORS.hawkesBlue};
  }
`;