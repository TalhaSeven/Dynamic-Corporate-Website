import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Content from "../pages/Content";
import { useDispatch, useSelector } from "react-redux";
import { getMenuData } from "../features/MenuSlice";
import { getApiData } from "../features/ApiSlice";

const AppRouter = () => {
  const { preferredLanguage: lang } = useSelector((state) => state.lang);
  const { apiPageData, error, loading } = useSelector((state) => state.api);
  const { menu } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  // const location = useLocation();

  useEffect(() => {
    dispatch(getMenuData(lang));
    dispatch(getApiData({ page: "index", lang }));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          {menu.length > 0 &&
            menu?.map((item, index) => {
              console.log(item);
              return (
                <Route
                  key={index}
                  path={`/${lang}/${item.slug}`}
                  element={<Content />}
                ></Route>
              );
            })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;