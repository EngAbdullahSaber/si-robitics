import React from "react";
import Acceptable from "../../img/Acceptable-removebg-preview.png";
import control from "../../img/control-removebg-preview.png";
import marketing from "../../img/marketing-removebg-preview.png";
import strength from "../../img/strength-removebg-preview.png";
import AboutImage from "../../img/prjtdevelopment-copy.png";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="Aboutus1"
      className="relative pt-16 bg-blueGray-50"
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
    >
      <h2 className=" md:text-4xl sm:text-3xl font-bold leading-none xs:text-2xl text-center py-6">
        {t("Why")}
        <span className="text-[#0097a7]"> {t("Choose")} </span>
        {t("Us")}
      </h2>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="sm:w-10/12 xs:w-full md:w-6/12 lg:w-4/12  px-12 md:px-4 mr-auto ml-auto -mt-78">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#0097a7]">
              <img
                alt="About Image"
                src={AboutImage}
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute xl:top-[-4rem] lg:top-[-3rem] hidden lg:block  left-0 w-full  h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 283,65"
                    className="text-[#0097a7] fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  {t("Si Robotics by partnering with Moton Technology Group")}
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  {t(
                    "to provide their products in the United Arab Emirates, we stand out in the market due to our commitment to excellence and customer satisfaction."
                  )}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white">
                      <img src={strength} alt="strength" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      {t("Strong R&D Strength")}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      {t(
                        "Our R&D center is staffed with highly skilled engineers"
                      )}
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white">
                      <img src={marketing} alt="marketing" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      {t("Experienced Overseas Marketing Team")}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      {t(
                        "Our overseas marketing team consists of professionals With extensive experience working on-site internationally."
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white">
                      <img src={control} alt="control" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      {t("Strict Quality Control")}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      {t(
                        "Incoming Material Inspection & Finished Products Testing"
                      )}
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full bg-white">
                      <img src={Acceptable} alt="Acceptable" />
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      {t("OEM & ODM Acceptable")}
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      {t(
                        "We understand that every customer has unique requirements, that is why we offer customizable solutions through our OEM & ODM services"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
