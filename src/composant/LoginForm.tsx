import { useState } from "react";

function LoginForm() {
  const [text, setText] = useState<string>("");

  const handleSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`bonjour ${text}`);
    setText("");
  };

  const handleOnChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>
        bienvenue chez nous ! <br />
        Connectez vous
      </h1>
      <form onSubmit={handleSubmitLogin}>
        <input
          type="text"
          value={text}
          placeholder="Entrez votre prénom..."
          onChange={handleOnChangeLogin}
          required
        />
        <input type="submit" value="Accéder à votre espace" />
      </form>
    </>
  );
}

export default LoginForm;
