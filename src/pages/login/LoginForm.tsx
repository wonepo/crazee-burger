import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/order/${userName}`);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <LoginFormStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez vous</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <FaBeer />
          <input
            type="text"
            value={userName}
            placeholder="Entrez votre prénom"
            onChange={handleOnChange}
            required
          />
        </div>
        <input type="submit" value="Accéder à mon espace >" />
      </form>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  h1,
  h2,
  hr {
    width: 100%;
    text-align: center;
    font-family: "AmaticBold";
    color: white;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 36px;
  }

  hr {
    height: 3px;
    background-color: #f56a2c;
    border: 1px solid #f56a2c;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 18px;
  }

  form > * {
    height: 53px;
    width: 100%;
  }

  form > div {
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 24px;
    gap: 12px;

    svg {
      color: #d3d3d3;
    }
  }

  [type="text"] {
    color: #d3d3d3;
    height: 19px;
    border: 1px solid white;
    flex-grow: 1;
    margin-top: px;
  }

  [type="submit"] {
    border-radius: 5px;
    color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.primary_burger};
    background-color: ${(props) => props.theme.colors.primary_burger};
  }

  input[type="submit"]:hover {
    color: ${(props) => props.theme.colors.primary_burger};
    border: 1px solid ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }

  form > div > div {
    height: 15px;
    width: 15px;
    background-color: yellow;
  }
`;
