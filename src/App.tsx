import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.styled.ts";

import LoginPage from "./pages/login/LoginPage.tsx";
import OrderPage from "./pages/order/OrderPage.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/order/:username" element={<OrderPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
