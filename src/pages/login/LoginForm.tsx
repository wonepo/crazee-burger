import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";

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
    <LoginFormStyled onSubmit={handleSubmit}>
      <Textfield
        iconbefore={<FaBeer />}
        type="text"
        value={userName}
        placeholder="Entrez votre prénom"
        onChange={handleOnChange}
        required
      ></Textfield>
      <Button label="Accéder à mon espace" iconafter={<FaBeer />}></Button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${(props) => props.theme.spacing.md};
`;
