import "swiper/css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMenuData } from "./features/MenuSlice";
import { getApiData } from "./features/ApiSlice";
import { setLanguage } from "./features/LanguageSlice";
import { getSiteData } from "./features/SiteSlice";
import { getTranslationsData } from "./features/TranslationsSlice";
import Content from "./pages/Content";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  const { preferredLanguage: lang } = useSelector((state) => state.lang);
  const { menu } = useSelector((state) => state.menu);
  const { site } = useSelector((state) => state.site);
  const dispatch = useDispatch();
  const location = useLocation();
  const splittedUrl = location.pathname.split("/");
  const menuResult = menu?.filter((item) => item.slug.includes(splittedUrl[2]));

  function setFavicon(url) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  }

  useEffect(() => {
    dispatch(getMenuData(lang));
    // eslint-disable-next-line
  }, [lang]);

  useEffect(() => {
    setFavicon(site.favicon);
    if (site.title) document.title = site.title;  
    if (splittedUrl[1] === "") {
      dispatch(getApiData({ page: "index", lang }));
      dispatch(getSiteData(splittedUrl[1]));
    } else if (menuResult.length > 0) {
      dispatch(setLanguage(splittedUrl[1]));
      dispatch(getMenuData(splittedUrl[1]));
      dispatch(getTranslationsData(splittedUrl[1]));
      dispatch(getSiteData(splittedUrl[1]));
      dispatch(
        getApiData({ page: splittedUrl.length - 1, lang: splittedUrl[1] })
      );
    } else {
      alert("geçersiz url");
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
