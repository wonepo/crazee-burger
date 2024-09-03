import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

export default function LoginForm(props: React.ComponentProps<"form">) {
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
    <LoginFormStyled onSubmit={handleSubmit} className={props.className}>
      <Textfield
        iconbefore={<BsPersonCircle />}
        type="text"
        value={userName}
        placeholder="Entrez votre prénom"
        onChange={handleOnChange}
        required
      ></Textfield>
      <Button
        className="buttoncss"
        label="Accéder à mon espace"
        iconafter={<IoChevronForward />}
      ></Button>
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
