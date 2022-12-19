// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from './components/nav/Menu';
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Content from "./pages/user/Content";
import PrivateRoute from "./components/routes/PrivateRoute";

const PageNotFound = () => {
  return (
    <h1>
      404 | PAGE NOT FOUND
    </h1>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/content" element={<PrivateRoute />}>
        <Route path="" element={<Content />} />
      </Route>
      <Route path="*" element={<PageNotFound />} replace />
    </Routes>
    </BrowserRouter>
  );
}