import { styled } from "styled-components";

import { COLORS, STYLES, FONT_FAMILY } from "constants/index";

export const Container = styled.div`
  width: 100%;
  background: ${COLORS.secondary};
  padding: 0 16px;
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
  ${STYLES.CCB}
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