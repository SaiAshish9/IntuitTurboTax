import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #055393;
  padding: 1em 16px;
`;

export const Content = styled.div`
  padding: 10px 16px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 80px;
  aspect-ratio: auto 80 / 80;
  padding-right: 16px;
`;

export const TextContainer = styled.div`
  color: #fff;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  p {
    margin: 0px;
    padding: 0px;
  }
`;

export const Title = styled.div`
  font-size: 1.17rem;
  line-height: 1.8rem;
  font-family: "Demi1";
`;

export const SubTitle = styled.div`
  font-size: 0.9rem;
  line-height: 1.2rem;
  font-family: "Regular1";
  //   font-weight: 600;
  display: flex;
  align-items: center;
  span {
    font-family: "Bold";
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
  background-color: #fff;
  padding: 10px 24px;
  color: #055393;
  border: 2px solid #055393;
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
  color: #393a3d;
  font-family: "Demi1";
`;

export const NavTextContent = styled.div`
  padding-left: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NavOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
  background-color: #fff;
  display: flex;
  padding: 0 40px;
`;
