import bg from "./../../assets/burger-background.jpg";
import Logo from "../../components/Logo";
import LoginForm from "./LoginForm";

import styled from "styled-components";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div>
        <div>
          <div>CRAZEE</div>
          <Logo />
          <div>BURGER</div>
        </div>
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background: ${(props) => props.theme.colors.primary_burger} url(${bg}) center
    center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 708px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > div > div:nth-child(1) {
    height: 150px;
    font-family: "AmaticBold";
    font-weight: 700;
    font-size: 110px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

    div {
      color: ${(props) => props.theme.colors.primary_burger};
    }
  }

  img {
    height: 150px;
    width: 200px;
    background-color: transparent;
    border: blue 1px;
  }
`;
