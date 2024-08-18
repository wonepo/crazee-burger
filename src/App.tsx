import { Route, Routes } from "react-router-dom";

import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage.tsx";
import ErrorPage from "./components/pages/error/ErrorPage.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
