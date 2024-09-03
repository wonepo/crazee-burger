import styled from "styled-components";

export default function WelComeCpn() {
  return (
    <WelComeCpnStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous</h2>
    </WelComeCpnStyled>
  );
}

const WelComeCpnStyled = styled.div`
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
    font-size: ${(props) => props.theme.fonts.size.P5};
  }

  h2 {
    font-size: ${(props) => props.theme.fonts.size.P4};
  }

  hr {
    height: 3px;
    background-color: #f56a2c;
    border: 1px solid #f56a2c;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    width: 400px;
    gap: ${(props) => props.theme.spacing.md};
    margin-top: ${(props) => props.theme.spacing.md};

    h1 {
      font-size: ${(props) => props.theme.fonts.size.P6};
    }

    h2 {
      font-size: ${(props) => props.theme.fonts.size.P4};
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    margin-top: ${(props) => props.theme.spacing.xl};
  }
`;
