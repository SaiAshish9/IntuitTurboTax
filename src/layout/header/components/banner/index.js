import React from "react";

import WarningIconImg from "assets/images/a.svg";
import ArrowRightIcon from "assets/images/arrowRight.svg";

import {
  Container,
  Content,
  LogoImg,
  TextContainer,
  Title,
  SubTitle,
  Button,
} from "./styles";

import I18n from "common/I18n";

const Banner = () => {
  return (
    <Container>
      <Content>
        <LogoImg alt="img" src={WarningIconImg} />
        <TextContainer>
          <Title>
            <I18n t="deadlineBannerText" />
          </Title>
          <SubTitle>
            <p>
              <I18n t="deadlineBannerSubText" />
              {" "}
              <span className="span1">
                <I18n t="learnMore" />
              </span>{" "}
              <img src={ArrowRightIcon} alt="img" />
            </p>
          </SubTitle>
        </TextContainer>
        <Button><I18n t="fileNow" /></Button>
      </Content>
    </Container>
  );
};

export default Banner;
