import bg from "./../../assets/burger-background.jpg";
import Logo from "../../components/Logo";
import LoginForm from "./LoginForm";

import styled from "styled-components";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div>
        <Logo />
        <div>
          <h1>Bienvenue chez nous !</h1>
          <hr />
          <h2>Connectez vous</h2>
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

  & > div > div:nth-child(1) {
    scale: 1.1;
  }

  & > div > div:nth-child(2) {
    margin-top: ${(props) => props.theme.spacing.sm};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.theme.spacing.sm};

    h1,
    h2,
    hr {
      width: 100%;
      text-align: center;
      font-family: Amatic-SC-Bold;
      color: ${(props) => props.theme.colors.white};
    }

    h1 {
      font-size: ${(props) => props.theme.fonts.P5};
    }

    h2 {
      font-size: ${(props) => props.theme.fonts.P4};
    }

    hr {
      height: 3px;
      background-color: #f56a2c;
      border: 1px solid #f56a2c;
    }
  }

  & > div > div > div {
    font-size: ${(props) => props.theme.fonts.P5};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    & > div > div:nth-child(1) {
      scale: 1.5;
    }
    & > div > div:nth-child(2) {
      width: 400px;
      gap: ${(props) => props.theme.spacing.md};
      margin-top: ${(props) => props.theme.spacing.md};
    }

    h1 {
      font-size: ${(props) => props.theme.fonts.P6};
    }

    h2 {
      font-size: ${(props) => props.theme.fonts.P4};
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    & > div > div:nth-child(1) {
      scale: 2.5;
    }
    & > div > div:nth-child(2) {
      margin-top: ${(props) => props.theme.spacing.xl};
    }
  }
`;
