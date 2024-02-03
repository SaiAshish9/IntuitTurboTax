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
  GuaranteedText,
} from "./styles";
import { PiPlayCircleFill } from "react-icons/pi";
import I18n from "common/I18n";
import { withRouter } from "react-router-dom";
import { isEsSelected } from "utils/languageSelector";

const MainSection = ({ history }) => {

  const pathname = history.location.pathname;

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
              <GuaranteedText>
                <I18n t="guaranteed" />.
              </GuaranteedText>
            </SubTitle>
            <BtnContainer>
              <StartBtn>
                <StartBtnTitle><I18n t="startForFree" /></StartBtnTitle>
                <StartBtnSubTitle><I18n t="payOnly" /></StartBtnSubTitle>
              </StartBtn>
              <SeeHowItWorksBtn es={isEsSelected(pathname)}>
                <PiPlayCircleFill size={21} />
                <SeeHowItWorksBtnText><I18n t="howItWorks" /></SeeHowItWorksBtnText>
              </SeeHowItWorksBtn>
            </BtnContainer>
          </LeftContainer>
        </Container>
      </ParentContainer>
      <Banner />
    </>
  );
};

export default withRouter(MainSection);
