import "./App.css";
import "swiper/css";
import { useLocation} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { getMenuData } from "./features/MenuSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getApiData } from "./features/ApiSlice";
import Content from "./pages/Content";
import { setLanguage } from "./features/LanguageSlice";

function App() {
  const { preferredLanguage: lang } = useSelector((state) => state.lang);
  const { menu } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getMenuData(lang));
  }, [lang]);


  const splittedUrl = location.pathname.split("/")
  
  const  menuResult = menu?.filter(item => item.slug.includes(splittedUrl[2]))


  useEffect(() => {

    if(splittedUrl[1] ===""){
        dispatch(getApiData({page:"index",lang}))
    }
    else if(menuResult.length > 0){
      dispatch(setLanguage(splittedUrl[1]))
      dispatch(getMenuData(splittedUrl[1]))
      dispatch(getApiData({page:splittedUrl[2],lang:splittedUrl[1]}))
    }
    else{
      alert("geçersiz url")
    }
    
  }, [location.pathname])
  

  return (
    <>
      <Navbar />
      <Content/>
    </>
  );
}

export default App;