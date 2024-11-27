"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import TextInput from "@/app/components/TextInput";
import InputLabel from "@/app/components/InputLabel";
import PrimaryButton from "@/app/components/PrimaryButton";
import axios from "axios";
import LoaderCircle from "@/app/components/Loarder";
import { message } from "@/app/components/alerts/formattingErrors";
import { Toast } from "@/app/components/alerts/sweetAlerts";
import { useRouter } from "next/navigation";
import {useAuth} from "@/context/AuthContext"

export default function Registro({}) {
  const router = useRouter();
  const {register} = useAuth()
  const [processing, setProcessing] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    edad: null,
    fecha_nacimiento: "",
    sexo: "",
    nivel_educativo: "",
    telefono: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: null,
  });
  // const roles = [
  //   {id: 1, name: "Administrador"},
  //   {id: 2, name: "Docente"},
  //   {id: 3, name: "Estudiante"},
  // ]

  const handleFormChange = (key, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();
    // console.log(form)
    try {
      const data = await register(form)
      reset()
      Toast(data.message, "success")
      router.push('/') 
    } catch(error){
      // console.log(error)
      Toast(message(error), "error") 
    }
    // const data = await register(form)
    // console.log(data)
    // try {
    //   setVisible(true);
    //   const res = await axios.post("/api/auth/register", form);
    //   if (res.status === 201) {
    //     reset();
    //     Toast(res.data.message, "success");
    //     router.push("/");
    //   }
    // } catch (error) {
    //   // console.log(error);
    //   Toast(message(error.response?.data?.errors), "error");
    // } finally {
    //   setVisible(false);
    // }
  };

  const reset = () => {
    setForm(() => ({
      nombre: "",
      apellidoP: "",
      apellidoM: "",
      edad: null,
      fecha_nacimiento: "",
      sexo: "",
      nivel_educativo: "",
      telefono: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: null  //quitar
    }));
  };

  return (
    <form onSubmit={submit}>
      <div>
        <InputLabel htmlFor="name" value="Nombre" />

        <TextInput
          id="name"
          name="name"
          value={form.nombre}
          className="mt-1 block w-full"
          autoComplete="name"
          isFocused={true}
          onChange={(e) => handleFormChange("nombre", e.target.value)}
          required
        />
      </div>
      <div>
        <InputLabel htmlFor="apellido" value="Primer apellido" />

        <TextInput
          id="apellido"
          name="p_apellido"
          value={form.apellidoP}
          className="mt-1 block w-full"
          autoComplete="p_apellido"
          isFocused={true}
          onChange={(e) => handleFormChange("apellidoP", e.target.value)}
          required
        />
      </div>

      <div>
        <InputLabel htmlFor="email" value="Email" />

        <TextInput
          id="email"
          type="email"
          name="email"
          value={form.email}
          className="mt-1 block w-full"
          autoComplete="username"
          onChange={(e) => handleFormChange("email", e.target.value)}
          required
        />
      </div>

      <div>
        <InputLabel htmlFor="password" value="Contraseña" />

        <TextInput
          id="password"
          type="password"
          name="password"
          value={form.password}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) => handleFormChange("password", e.target.value)}
          required
        />
      </div>

      <div>
        <InputLabel
          htmlFor="password_confirmation"
          value="Confirmar contraseña"
        />

        <TextInput
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          value={form.password_confirmation}
          className="mt-1 block w-full"
          autoComplete="new-password"
          onChange={(e) =>
            handleFormChange("password_confirmation", e.target.value)
          }
          required
        />
      </div>
      {/* quitarrr!!!! */}
      {/* <div className="mt-4">
        <InputLabel htmlFor="type_user" value="Rol de usuario"/>

        <select id="my_type_user" className="w-full mt-1 block" value={form.role || ""} onChange={(e) => handleFormChange("role", parseInt(e.target.value, 10))}>
          <option value="">Seleccione una opción</option>
          {roles.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div> */}
      <div className="flex items-center justify-end mt-4">
        {/*<Link*/}
        {/*    href={route('login')}*/}
        {/*    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
        {/*>*/}
        {/*    */}
        {/*</Link>*/}

        <PrimaryButton className="ms-4" disabled={processing}>
          Registrar
        </PrimaryButton>
      </div>
      <LoaderCircle visible={visible} />
    </form>
  );
}
