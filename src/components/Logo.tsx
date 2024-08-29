import styled from "styled-components";
import logo from "../assets/logo-orange.png";

export default function Logo() {
  return (
    <LogoStyled>
      <div>CRAZEE</div>
      <div></div>
      <div>BURGER</div>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  gap: ${(props) => props.theme.spacing.xxs};

  div {
    height: 100%;
    font-family: Amatic-SC-Bold;
    font-weight: ${(props) => props.theme.weights.bold};
    font-size: ${(props) => props.theme.fonts.P5};
    line-height: 60px;
    text-align: center;
    color: ${(props) => props.theme.colors.primary_burger};
  }

  div:nth-child(1) {
    width: 73px;
  }

  div:nth-child(2) {
    width: 80px;
    background: transparent url(${logo}) center center/cover no-repeat;
  }

  div:nth-child(3) {
    width: 80px;
  }
`;
