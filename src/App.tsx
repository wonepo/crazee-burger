// @ts-nocheck
import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import LoginForm from "./components/pages/login/LoginForm";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/login/OrderPage.tsx";
import ErrorPage from "./components/pages/login/ErrorPage.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
