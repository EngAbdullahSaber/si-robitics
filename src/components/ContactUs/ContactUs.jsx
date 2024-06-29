import React from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="my-10"
      id="Contact"
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
    >
      <div className="flex justify-center items-center  bg-white">
        <div className="container mx-auto  px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex relative">
              <h1 className="font-bold uppercase text-5xl">
                {t("Send us a")} <br />
                <span className="text-[#0097a7]">{t("Message")}</span>
              </h1>
              {i18n.language == "ar" ? (
                <div className="letter-image left-7 hidden xl:block">
                  <div className="animated-mail">
                    <div className="back-fold"></div>
                    <div className="letter">
                      <div className="letter-border"></div>
                      <div className="letter-title"></div>
                      <div className="letter-context"></div>
                      <div className="letter-stamp">
                        <div className="letter-stamp-inner"></div>
                      </div>
                    </div>
                    <div className="top-fold"></div>
                    <div className="body"></div>
                    <div className="left-fold"></div>
                  </div>
                </div>
              ) : (
                <div className="letter-image right-0 hidden xl:block">
                  <div className="animated-mail">
                    <div className="back-fold"></div>
                    <div className="letter">
                      <div className="letter-border"></div>
                      <div className="letter-title"></div>
                      <div className="letter-context"></div>
                      <div className="letter-stamp">
                        <div className="letter-stamp-inner"></div>
                      </div>
                    </div>
                    <div className="top-fold"></div>
                    <div className="body"></div>
                    <div className="left-fold"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={t("First Name")}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder={t("Last Name")}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder={t("Email")}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder={t("Phone")}
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder={t("Your Message")}
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className=" button3 uppercase text-base font-bold tracking-wide bg-blue-600 text-gray-100 py-3 px-1 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                {t("Send Message")}
              </button>
            </div>
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#0097a7] rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                {t("Drop in our office")}
              </h1>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">{t("Main Office")}</h2>
                  <p className="text-gray-200"> مبنى twins towers ,الرقة </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">{t("Call Us")}</h2>
                  <p className="text-gray-200">{t("Tel")}: +971501686816</p>
                  <p className="text-gray-200">
                    {t("email")}: salehallabi@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"></div>
    </div>
  );
};

export default ContactUs;
