import { useState } from "react";
import LoginForm from "./LoginForm";
import Logo from "./Logo";

function LoginPage() {
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
    <div>
      <Logo />
      <LoginForm
        text={text}
        handleSubmit={handleSubmitLogin}
        handleChange={handleOnChangeLogin}
      />
    </div>
  );
}

export default LoginPage;
