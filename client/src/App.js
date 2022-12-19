// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomeView from "./views/HomeView";
import ProfileView from "./views/ProfileView";

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
    <Toaster/>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="*" element={<PageNotFound />} replace />
    </Routes>
    </BrowserRouter>
  );
}