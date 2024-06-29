import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Aboutus from "./components/aboutus/Aboutus";
import Products from "./components/products/Products";
import AboutUs from "./components/AboutUss/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import { Vortex } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [loading, setLoading] = useState(true);
  let [visiblee, setVisiblee] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisiblee(true);
      } else {
        setVisiblee(false);
      }
    });
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="spinner">
          <Vortex
            visible={true}
            height="200"
            width="200"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={[
              "#a0ccd4 ",
              "#024147",
              "#a0ccd4",
              "#0097a7",
              "#005b64",
              "#0097a7",
            ]}
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <Aboutus />
          <Products />
          <AboutUs />
          <ContactUs />
          <Footer />
          {visiblee ? (
            <button
              onClick={goToTop}
              className="z-50 bg-[#125259] top_number p-3 text-white text-center text-xl rounded-full fixed bottom-10 right-10 "
            >
              <FaArrowUp />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
