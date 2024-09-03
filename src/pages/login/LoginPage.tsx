import bg from "./../../assets/burger-background.jpg";
import Logo from "../../components/Logo";
import LoginForm from "./LoginForm";

import styled from "styled-components";
import WelComeCpn from "./WelComeCpn";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div>
        <Logo className="logocss" />
        <div>
          <WelComeCpn />
          <LoginForm />
        </div>
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${(props) => props.theme.colors.primary_burger} url(${bg}) center
      center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .logocss {
    scale: 1.1;
    div {
      font-size: ${(props) => props.theme.fonts.size.P5};
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    .logocss {
      scale: 1.5;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    .logocss {
      scale: 2.5;
    }
  }
`;
