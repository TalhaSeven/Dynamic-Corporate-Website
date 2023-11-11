import { useSelector } from "react-redux";
import Slider from "../components/Slider";
import BreadCrumb from "../components/BreadCrumb";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";
import Component4 from "../components/Component4/Component4";
import Component5 from "../components/Component5/Component5";
import Component6 from "../components/Component6/Component6";
import Component7 from "../components/Component7";
import Component8 from "../components/Component8";
import Component9 from "../components/Component9";
import Text from "../components/Text.jsx";
import ContactForm from "../components/contactForm/ContactForm";

const Content = () => {
  const { apiPageData } = useSelector((state) => state.api);
  return (
    <div>
      {apiPageData?.length > 0 &&
        apiPageData?.map((item, index) => {
          const { modulName } = item;
          switch (modulName) {
            case "slider":
              return <Slider item={item} key={index} />;
            case "breadcrumb":
              return <BreadCrumb item={item} key={index} />;
            case "component1":
              return <Component1 item={item} key={index}/>;
            case "component2":
              return <Component2 item={item} key={index} />;
            case "component3":
              return <Component3 item={item} key={index} />;
            case "component4":
              return <Component4 item={item} key={index} />;
            case "component5":
              return <Component5 item={item} key={index} />;
            case "component6":
              return <Component6 item={item} key={index} />;
            case "component7":
              return <Component7 item={item} key={index} />;
            case "component8":
              return <Component8 item={item} key={index} />;
            case "component9":
              return <Component9 item={item} key={index} />;
              // eslint-disable-next-line  
            case "text":
              // eslint-disable-next-line 
              return  (
                <>
                <Text item={item} key={index} /> 
                <ContactForm />
                </>
              )
            default:
              return null;
          }
        })}
    </div>
  );
};

export default Content;
