import React from "react";

import WarningIconImg from "assets/images/a.svg";
import ArrowRightIcon from "assets/images/arrowRight.svg";

import { Container, Content, LogoImg, TextContainer, Title, SubTitle, Button } from "./styles"

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
              If you started your 2022 tax return with TurboTax, you have until
              Oct 31 at 9PM PST to file your return online. You may owe a late
              filing fee for <br /> filing after Oct 16. <span>Learn more</span>{" "}
              {""}
              <img src={ArrowRightIcon} alt="img" />
            </p>
          </SubTitle>
        </TextContainer>
        <Button>File now</Button>
      </Content>
    </Container>
  );
};

export default Banner;
