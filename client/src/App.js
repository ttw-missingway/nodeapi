// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from './components/nav/Menu';
import Home from "./pages/Home";

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
      <Route path="*" element={<PageNotFound />} replace />
    </Routes>
    </BrowserRouter>
  );
}