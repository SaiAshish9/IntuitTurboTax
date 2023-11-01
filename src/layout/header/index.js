import React from "react";
import {
  Container,
  Content,
  LogoImg,
  TextContainer,
  Title,
  SubTitle,
  Button,
  NavOptions,
  NavImg,
  NavTextOption,
  NavTextContent,
  NavOptionsContainer,
} from "./styles";

import WarningIconImg from "../../assets/images/a.svg";
import ArrowRightIcon from "../../assets/images/arrowRight.svg";

const navLinkOptions = [
  {
    title: "Expert does your taxes",
  },
  {
    title: "Do it yourself",
  },
  {
    title: "Resources",
  },
  {
    title: "Support",
  },
  {
    title: "Pricing",
  },
];

const Header = () => {
  return (
    <>
      <Container>
        <Content>
          <LogoImg alt="img" src={WarningIconImg} />
          <TextContainer>
            <Title>
              <p>The deadline to file a 2022 tax return has passed</p>
            </Title>
            <SubTitle>
              <p>
                If you started your 2022 tax return with TurboTax, you have
                until Oct 31 at 9PM PST to file your return online. You may owe
                a late filing fee for <br /> filing after Oct 16.{" "}
                <span>Learn more</span> {""}
                <img src={ArrowRightIcon} alt="img" />
              </p>
            </SubTitle>
          </TextContainer>
          <Button>File now</Button>
        </Content>
      </Container>
      <NavOptionsContainer>
        <NavOptions>
          <NavImg
            src="https://digitalasset.intuit.com/IMAGE/A4H7Z5lhp/tt-logo-50-50-color.svg"
            alt="img"
          />
          <NavTextContent>
            {navLinkOptions.map((option) => (
              <NavTextOption key={option.title}>{option.title}</NavTextOption>
            ))}
          </NavTextContent>
        </NavOptions>
        <NavOptions>
          <p>En</p>
        </NavOptions>
      </NavOptionsContainer>
    </>
  );
};

export default Header;
