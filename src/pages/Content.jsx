import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getApiData } from "../features/ApiSlice";
import HomeSlider2 from "../components/homeSlider/HomeSlider2";
import BreadCrumb from "../components/BreadCrumb";
import BestFor from "../components/BestFor";
import JoinOurNew from "../components/JoinOurNew";
import SwiperOur from "../components/SwiperOur";
import Parentsays from "../components/parentsays/Parentsays";

import ProgramDetails from "../components/ProgramDetails";
import WayToLearn from "../components/WayToLearn";
import { Table } from "antd";
import Faq from "../components/faq/Faq";
import Settling from "../components/Settling";

const Content = () => {
    const location = useLocation();
    const { apiPageData } = useSelector((state) => state.api);

  return (
    <div>
        {apiPageData?.length > 0 && apiPageData?.map((item,index)=> {
          const {modulName} = item;
          switch (modulName) {
            case "slider":
              return <HomeSlider2 item={item} key={index} />;
            case "breadcrumb":
              return <BreadCrumb item={item}  key={index} />;
            case "component1":
              return <BestFor item={item}  key={index} />;
            case "component2":
              return <Faq item={item}  key={index} />;
            case "component3":
              return <JoinOurNew  item={item}  key={index} />;
            case "component4":
              return <SwiperOur item={item}  key={index} />;
            case "component5":
              return <Parentsays item={item}  key={index} />;
            case "component6":
              return <Settling item={item}  key={index} />;
            case "component7":
              return <ProgramDetails item={item}  key={index} />;
            case "component8":
              return <WayToLearn item={item}  key={index} />;
            case "component9":
              return <Table item={item}  key={index} />;
            default:
              break;
          }
        })}
    </div>
  )
}

export default Content