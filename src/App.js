import "./App.css";
import "swiper/css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { getMenuData } from "../../features/MenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getApiData } from "./features/ApiSlice";
import Content from "./pages/Content";

function App() {
  const { preferredLanguage: lang } = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuData(lang));
    dispatch(getApiData({ page: "index", lang }));
  }, [lang]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
