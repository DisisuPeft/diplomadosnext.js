"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Modal } from "./Modal";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";

export default function Header({}) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
  const [show, setShow] = useState(false);
  const menu = useRef(null);
  const [tab, setTab] = useState("login");
  const [processing, setProcessing] = useState(false);

  // const [form, setForm] = useState({
  //   nombre: "",
  //   p_apellido: "",
  //   s_apellido: "",
  //   edad: null,
  //   fecha_nacimiento: "",
  //   sexo: "",
  //   nivel_educativo: "",
  //   telefono: "",
  //   email: "",
  //   password: "",
  //   password_confirmation: "",
  // });

  // const handleFormChange = (key, value) => {
  //   setForm((prevForm) => ({
  //     ...prevForm,
  //     [key]: value,
  //   }));
  // };

  const handleClick = (e) => {
    if (menu.current && !menu.current.contains(e.target)) {
      setShowingNavigationDropdown(false);
    }
  };

  const closeModal = () => {
    setShow(false);
  };

  const handleTabClick = (tab) => {
    setTab(tab);
  };
  // console.log(tab);
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menu]);
  return (
    <div className="flex flex-col">
      <header>
        <nav className="w-full bg-white shadow-lg py-2 dark:bg-body-dark z-20 h-[110px] fixed">
          <div className="container mx-auto flex justify-start items-center mt-1">
            <div className="flex-shrink-0 ml-2 ma-4">
              <div className="text-center text-gray-800 mt-1">
                <div>
                  <Link href="/">
                    <Image
                      src="/img/logobgwhite.png"
                      width={70}
                      height={70}
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* nombre escuela, habria que ver una forma de diseñarlo y ver que venga con el logo, no full copia*/}
            <div className="flex justify-center mr-10">
              <div className="fill-current text-gray-800 mt-1">
                {/* <img className="rounded-md" src={logo} alt="logo"/> */}
                <p className="text-[30px]">
                  Academia Nexus
                  {/*"Academia Nexus" – Sugiere una conexión entre diferentes áreas de conocimiento.*/}
                </p>
              </div>
            </div>
            {/* Menu para pantallas grandes */}
            <div className="hidden md:flex flex-grow justify-start ml-16 mt-2">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    className="text-white hover:text-blue-400 transition duration-300 text-md lg:text-lg"
                    href="#"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white hover:text-blue-400 transition duration-300 text-md lg:text-lg"
                    href="#"
                  >
                    Cursos
                  </Link>
                </li>
              </ul>
            </div>
            {/* Menu para pantallas pequeñas */}
            <div className="-me-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState
                  )
                }
                className="inline-flex items-center ml-5 justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={
                      !showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                (showingNavigationDropdown ? "block" : "hidden") +
                " absolute top-full right-0 w-[200px] bg-white sm:hidden shadow-lg"
              }
              ref={menu}
            >
              <div className="pt-2 pb-3 space-y-1">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                >
                  Inicio
                </Link>
              </div>

              <div className="pt-4 pb-1 border-t border-gray-200">
                <div className="mt-3 space-y-1">
                  <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                    Cursos
                  </button>
                  {/* <button
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                    onClick={openModal}
                  >
                    Iniciar sesión
                  </button> */}
                </div>
              </div>
            </div>
            <div className="hidden md:flex lg:justify-center mr-10 mt-[10px]">
              <Link
                href="/auth/login"
                className="rounded-md flex items-center p-4"
              >
                <p className="text-md lg:text-lg">
                  Iniciar sesión
                </p>
              </Link>
              <Link
                href="/auth/register"
                className="rounded-md flex items-center p-4 bg-blue-600"
              >
                <p className="text-white text-md lg:text-lg">Crear cuenta</p>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
