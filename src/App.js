import "./App.css";
import "swiper/css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer2 from "./components/Footer2";

 import Gallery from "./components/Gallery/Gallery";
// import Slider2 from "./components/Slider2";
// import SwiperOur from "./components/SwiperOur";
// import Settling from "./components/Settling";
// import WayToLearn from "./components/WayToLearn";
// import Footer from "./components/Footer";
// import Faq from "./components/Faq";
// import ContactForm from "./components/ContactForm";
// import Table from "./components/table/Table";
// import BestFor from "./components/BestFor";
// import ProgramDetails from "./components/ProgramDetails";
// import Programs from "./components/programs/Programs";
// import BreadCrumb from "./components/BreadCrumb";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <h1 className="text-[23px] md:text-[35px] lg:text-[40px] xl:text-5xl font-semibold mb-4 whitespace-nowrap text-center font-fredoka">
        Buraya bir şey eklemeyin arkadaşlar
      </h1>
      <Gallery/>
      {/* <Slider2 />
      <Faq />
      <ContactForm />
      <SwiperOur />
      <Settling />
      <WayToLearn/>
      <Table/>
      <Programs/>
      <OurTeachers/>
      <ProgramDetails />
      <BestFor />
      <BreadCrumb />
      <Footer/> */}
      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
