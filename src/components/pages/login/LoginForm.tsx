import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/order/${text}`);
    //alert(`bonjour ${text}`);
    //setText("");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <br />
      <h3>Connectez vous</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Entrez votre prénom..."
          onChange={handleOnChange}
          required
        />
        <input type="submit" value="Accéder à votre espace" />
      </form>
    </div>
  );
}

export default LoginForm;
