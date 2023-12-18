import React, { useState } from "react";

export default function LoginForm(): React.JSX.Element {
  const initialState: string = "";
  const [textValue, setTextValue] = useState<string>(initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Bonjour " + textValue);
    setTextValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTextValue(event.target.value);

  return(
  <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h3>Connectez-vous</h3>
    <input
      onChange={handleChange}
      type="text"
      value={textValue}
      name=""
      id=""
      placeholder="Entrer votre prénom"
      required
    />
    <button type="submit">
      Accédez à votre espace
    </button>
  </form>);
}
