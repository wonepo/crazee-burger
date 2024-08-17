// @ts-nocheck
import { useState } from "react";

import LoginForm from "./components/pages/login/LoginForm";
import LoginPage from "./components/pages/login/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
