// @ts-nocheck
import { useState } from "react";

import LoginForm from "./composant/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginForm />
    </>
  );
}

export default App;
