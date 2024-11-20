import { NextResponse } from "next/server";
import axios from "axios";
// export async function POST(req) {
//   // try {
//   const form = await req.json(); // Extraer datos del cuerpo de la petición

//   //   const register = await axios.post("http://127.0.0.1:8000/register", form);

//   //   // Devuelve solo los datos de la respuesta del backend
//   //   return NextResponse.json(register.data, { status: 200 });
//   // } catch (error) {
//   //   // console.log("Error en la petición al backend:", error);

//   //   // Captura el error y devuelve una respuesta 500 con más información
//   //   return NextResponse.json(
//   //     { error: "Error al registrar", details: error },
//   //     { status: 400 }
//   //   );
//   // }
//   axios
//     .post("http://127.0.0.1:8000/register", form)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
export async function POST(req) {
  try {
    const form = await req.json();

    const response = await axios.post("http://127.0.0.1:8000/register", form);

    // Enviar al cliente solo los datos necesarios
    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    const status = error.response ? error.response.status : 500;
    const errorMessage = error.response
      ? error.response.data
      : "Error interno del servidor";

    return NextResponse.json({ errors: errorMessage || null }, { status });
  }
}
