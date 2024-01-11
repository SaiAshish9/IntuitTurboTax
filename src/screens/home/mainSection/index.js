import React from "react";
import {
  Banner,
  Container,
  ParentContainer,
  Content,
  SubTitle,
  LeftContainer,
  BtnContainer,
  StartBtn,
  StartBtnTitle,
  StartBtnSubTitle,
  SeeHowItWorksBtn,
  SeeHowItWorksBtnText,
} from "./styles";
import { PiPlayCircleFill } from "react-icons/pi";
import I18n from "common/I18n";
import { withRouter } from "react-router-dom";

const MainSection = ({ history }) => {
  return (
    <>
      <ParentContainer>
        <Container>
          <LeftContainer>
            <Content>
              <I18n t="title1" /> <br /> <I18n t="title2" />
            </Content>
            <SubTitle>
              <I18n t="subTitle" />—
              <span style={{ color: "#0077c5" }}>
                <I18n t="guaranteed" />.
              </span>
            </SubTitle>
            <BtnContainer>
              <StartBtn>
                <StartBtnTitle><I18n t="startForFree" /></StartBtnTitle>
                <StartBtnSubTitle><I18n t="payOnly" /></StartBtnSubTitle>
              </StartBtn>
              <SeeHowItWorksBtn es={history.location.pathname == "/es"}>
                <PiPlayCircleFill size={21} />
                <SeeHowItWorksBtnText><I18n t="howItWorks" /></SeeHowItWorksBtnText>
              </SeeHowItWorksBtn>
            </BtnContainer>
          </LeftContainer>
        </Container>
      </ParentContainer>
      <Banner></Banner>
    </>
  );
};

export default withRouter(MainSection);
