import { LoginProps } from "./PropsType";

function LoginForm(props: LoginProps) {
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <br />
      <h3>Connectez vous</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.text}
          placeholder="Entrez votre prénom..."
          onChange={props.handleChange}
          required
        />
        <input type="submit" value="Accéder à votre espace" />
      </form>
    </div>
  );
}

export default LoginForm;
