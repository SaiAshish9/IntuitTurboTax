import { styled } from "styled-components";

import { COLORS, STYLES, FONT_WEIGHT, FONT_FAMILY } from "../../constants";

export const Container = styled.div`
  width: 100%;
  background: ${COLORS.secondary};
  padding: 0 16px;
`;

export const ContentWrapper = styled.div`
  ${STYLES.RBC}
  justify-content: flex-start;
`;

export const Content = styled.div`
  padding: 10px 16px;
  max-width: 1200px;
  margin: auto;
  ${STYLES.RBC}
  justify-content: flex-start;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;
  aspect-ratio: auto 80 / 80;
  padding-right: 16px;
`;

export const TextContainer = styled.div`
  color: ${COLORS.white};
  margin-left: 10px;
  ${STYLES.CCC}
  width: 80%;
  p {
    margin: 0px;
    padding: 0px;
  }
`;

export const Title = styled.div`
  font-size: 1.17rem;
  line-height: 1.8rem;
  font-family: ${FONT_FAMILY.Demi1};
`;

export const SubTitle = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-family: ${FONT_FAMILY.Regular1};
  ${STYLES.RBC};
  span {
    font-family: ${FONT_FAMILY.Bold};
    cursor: pointer;
    &: hover {
      text-decoration: underline;
    }
  }
  img {
    height: 0.5rem;
    position: relative;
    top: 0.108px;
  }
`;

export const Button = styled.div`
  background-color: ${COLORS.white};
  padding: 10px 24px;
  color: ${COLORS.secondary};
  border: 2px solid ${COLORS.secondary};
  font-size: 1.15rem;
  border-radius: 4px;
  line-height: 1.4rem;
  &:hover {
    cursor: pointer;
  }
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
  padding-left: 60px;
  ${STYLES.RBC};
  align-items: flex-end;
  justify-content: flex-start;
`;

export const NavOptionsContainer = styled.div`
  ${STYLES.RBC};
  min-height: 70px;
  background-color: ${COLORS.white};
  display: flex;
  padding: 0 40px;
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
