import styled, { css } from "styled-components";

import { FONT_FAMILY, STYLES } from "constants/index";

export const ParentContainer = styled.div`
  background-color: #f4f4ef;
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ es }) =>
    es
      ? css`
          margin-bottom: 0px;
        `
      : css`
          margin-bottom: 70px;
        `};
`;

export const Container = styled.div`
  background-color: #f4f4ef;
  width: ${({ es }) => es ? "90%" : "85%"};
  height: 500px;
  background-image: url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  p {
    padding: 0px;
    margin-top: 0px;
  }
  ${STYLES.RBC};
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1.2rem;
  ${({ es }) =>
    es
      ? css`
          padding-left: calc(7rem + 2.5%);
          padding-right: 7rem;
        `
      : css`
          padding: 0px 7rem;
        `};
`;

export const Content = styled.p`
  font-size: 3rem;
  line-height: 3.5rem;
  color: #393a3d;
  font-family: ${FONT_FAMILY.Regular1};
  margin: 0px;
  margin-bottom: 1.2rem;
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: ${FONT_FAMILY.Regular1};
  color: #393a3d;
  align-self: flex-start;
`;

export const Banner = styled.div`
  background-color: #ebf9ff;
  height: 9rem;
  width: 100%;
`;

export const BtnContainer = styled.div`
  margin-top: 1.12rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StartBtn = styled.div`
  color: #fff;
  background: #055393;
  border: 2px solid #055393;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px 24px;
  font-family: ${FONT_FAMILY.Regular1};
  font-weight: 600;
  text-align: center;
  ${STYLES.CBC};
  cursor: pointer;
`;

export const StartBtnTitle = styled.p`
  font-size: 1.08rem;
  line-height: 1.5rem;
`;

export const StartBtnSubTitle = styled.p`
  font-size: 0.8rem;
`;

export const SeeHowItWorksBtn = styled.div`
  cursor: pointer;
  font-family: ${FONT_FAMILY.Regular1};
  font-weight: 600;
  border-radius: 4px;
  color: #055393;
  background: #fff;
  border: 2px solid #055393;
  margin-left: 20px;
  padding: 10px 24px;
  ${STYLES.RBC};
  cursor: pointer;
  ${({ es }) =>
    es
      ? css`
          min-height: 52px;
        `
      : css`
          min-height: 38px;
        `}
`;

export const SeeHowItWorksBtnText = styled.p`
  color: #055393;
  margin-left: 7px;
`;

export const GuaranteedText = styled.span`
  color: #0077c5;
`;
