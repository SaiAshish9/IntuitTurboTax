import React from "react";
import {
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
import { isEsSelected, isEnSelected } from "utils/languageSelector";
import FreeBannerEdition from "./components";

const MainSection = ({ history }) => {
  const pathname = history.location.pathname;

  const obtainBackgroundImage = (pathname) => {
    if (isEnSelected(pathname)) {
      return "https://digitalasset.intuit.com/IMAGE/A7Iljyjbv/DIY_HowitWorks_Dev-and-Lamar_XL.jpg";
    }
    return "https://digitalasset.intuit.com/IMAGE/A1cAOWNCV/es-US-DIY_HowitWorks_Dev-and-Lamar_XL.jpg";
  };

  function renderHowItWorksBtn(pathname) {
    if (isEnSelected(pathname)) {
      return (
        <SeeHowItWorksBtn es={isEsSelected(pathname)}>
          <PiPlayCircleFill size={21} />
          <SeeHowItWorksBtnText>
            <I18n t="howItWorks" />
          </SeeHowItWorksBtnText>
        </SeeHowItWorksBtn>
      );
    }
    return null;
  }

  function renderSubTitleSeparator(pathname) {
    if (isEnSelected(pathname)) {
      return "—";
    }
    return ", ";
  }

  return (
    <>
      <ParentContainer es={isEsSelected(pathname)}>
        <Container  es={isEsSelected(pathname)} image={obtainBackgroundImage(pathname)}>
          <LeftContainer es={isEsSelected(pathname)}>
            <Content>
              <I18n t="title1" /> <br /> <I18n t="title2" />
            </Content>
            <SubTitle>
              <I18n t="subTitle" />
              {renderSubTitleSeparator(pathname)}
              <GuaranteedText>
                <I18n t="guaranteed" />
              </GuaranteedText>
              .
            </SubTitle>
            <BtnContainer>
              <StartBtn>
                <StartBtnTitle>
                  <I18n t="startForFree" />
                </StartBtnTitle>
                <StartBtnSubTitle>
                  <I18n t="payOnly" />
                </StartBtnSubTitle>
              </StartBtn>
              {renderHowItWorksBtn(pathname)}
            </BtnContainer>
          </LeftContainer>
        </Container>
      </ParentContainer>
      <FreeBannerEdition />
    </>
  );
};

export default withRouter(MainSection);
