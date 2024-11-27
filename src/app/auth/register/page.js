import Image from "next/image";
import Link from "next/link";
// import imagen from "../../../../public/img"
import Registro from "../forms/Registro";
import axios from "axios";


export default function Register({}) {
  return (
    <div className="md:flex h-screen">
      <div className="w-1/2">
        {/* <div>
          <Image
            src="/img/people-dressed.jpeg"
            style={{ objectFit: "cover", width: "80%", height: "70%" }}
            width={750}
            height={200}
            alt="Imagen de estudiantes"
            priority={true}
          />
        </div> */}
        {/* <div className="bg-gray-500">Hola</div> */}
        <div className="rounded-lg text-center w-full">
          <div className="relative w-full h-[945px] overflow-hidden mb-2">
            <Image
              src="/img/people-dressed.jpeg"
              alt="Imagen del slogan"
              width={900}
              height={200}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <h2 className="bg-[#050038] p-2 absolute bottom-[100px] left-1/2 transform -translate-x-1/2 text-white text-[30px] font-bold">
              La excelencia comienza con una decisión
            </h2>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white rounded-md shadow-2xl w-[500px]">
          <div className="m-2">
            <Link href="/">
              <Image
                src="/img/logobgwhite.png"
                width={70}
                height={70}
                alt="logo"
              />
            </Link>
          </div>
          <h1 className="text-2xl mb-5 m-5">Crear cuenta</h1>
          <div className="m-5">
            <Registro />
          </div>
        </div>
      </div>
    </div>
  );
}
