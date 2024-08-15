// @ts-nocheck
import { useState } from "react";

import LoginForm from "./composant/LoginForm";
import LoginPage from "./composant/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
