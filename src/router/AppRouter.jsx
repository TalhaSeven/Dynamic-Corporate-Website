import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getMenuData } from "../features/MenuSlice";
import { getApiData } from "../features/ApiSlice";
import Content from "../pages/Content";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  const { preferredLanguage: lang } = useSelector((state) => state.lang);
  const { menu } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

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