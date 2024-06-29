import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { changLanguage } from "../../Redux/Action";
import logo from "../../img/Capture-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [close2, setClose2] = useState(false);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const changeLang = (lng) => {
    console.log(lng);
    lng == "en" ? dispatch(changLanguage("en")) : dispatch(changLanguage("ar"));
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="bg-[#f3f4f694] py-2">
        <div className="container mx-auto flex justify-around ">
          <div className="w-full  xs:hidden sm:flex  justify-between"></div>
          <div className="w-full text-right relative">
            <button
              className=" w-full flex h-full items-center justify-end text-[#0097a7] mr-10 text-lg"
              onClick={() => {
                setClose2(!close2);
              }}
            >
              <MdLanguage />
              <IoIosArrowDown />
            </button>
            <div
              className={` ${
                close2 ? " " : "hidden "
              }dropdown-menu bg-slate-600 right-1 text-white mt-1 rounded absolute z-10 shadow-lg w-40 max-w-xs`}
            >
              <ul
                className="list-none overflow-hidden rounded"
                onClick={() => {
                  setClose2(!close2);
                }}
              >
                <li onClick={() => changeLang("ar")}>
                  <span className="cursor-pointer  flex py-2 px-4 transition duration-300">
                    AR
                  </span>
                </li>
                <li onClick={() => changeLang("en")}>
                  <span className=" cursor-pointer flex py-2 px-4 transition duration-300">
                    EN
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="bg-[#f3f4f6] relative px-4 py-4 flex justify-between items-center"
        dir={i18n.language == "ar" ? "rtl" : "ltr"}
      >
        <a className="text-3xl font-bold leading-none" href="#">
          <img src={logo} className="h-16" alt="logo" />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={() => {
              setOpen(!open);
              setClose(!close);
            }}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden w-[66%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2   lg:flex lg:items-center  lg:space-x-6">
          <li>
            <a
              className=" text-lg font-semibold text-gray-800 hover:text-blue-800"
              href="#Home"
            >
              {t("Home")}
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>

          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className=" text-lg font-semibold text-gray-800 hover:text-blue-800"
              href="#Services"
            >
              {t("Services")}
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className=" text-lg font-semibold text-gray-800 hover:text-blue-800"
              href="#Aboutus"
            >
              {t("About Us")}
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className=" text-lg font-semibold text-gray-800 hover:text-blue-800"
              href="#Aboutus1"
            >
              {t("Why Choose Us")}
            </a>
          </li>
          <li>
            <a
              className=" text-lg font-semibold text-gray-800 hover:text-blue-800"
              href="#Contact"
            >
              {t("Contact Us")}
            </a>
          </li>
        </ul>
      </nav>
      <div className={`${open ? "" : "hidden "} navbar-menu relative z-50 `}>
        <div
          className={`${
            close ? "hidden " : " "
          }navbar-backdrop fixed inset-0 bg-gray-800 opacity-25`}
        ></div>
        <nav
          className={`${
            close ? "hidden " : " "
          } fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto`}
        >
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img src={logo} className="h-12" alt="logo" />
            </a>
            <button
              className="navbar-close"
              onClick={() => {
                setClose(!close);
                setOpen(!open);
              }}
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 hover:bg-blue-50 text-base font-semibold text-gray-800 hover:text-blue-800 rounded"
                  href="#"
                >
                  {t("Home")}
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 hover:bg-blue-50 text-base font-semibold text-gray-800 hover:text-blue-800 rounded"
                  href="#Aboutus1"
                >
                  {t("Why Choose Us")}
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 hover:bg-blue-50 text-base font-semibold text-gray-800 hover:text-blue-800 rounded"
                  href="#Services"
                >
                  {t("Services")}
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 hover:bg-blue-50 text-base font-semibold text-gray-800 hover:text-blue-800 rounded"
                  href="#Aboutus"
                >
                  {t("About Us")}
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 hover:bg-blue-50 text-base font-semibold text-gray-800 hover:text-blue-800 rounded"
                  href="#Contact"
                >
                  {t("Contact Us")}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
