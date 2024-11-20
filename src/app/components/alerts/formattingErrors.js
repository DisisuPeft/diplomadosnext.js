export const message = (values) => {
  let mensaje = "";
  for (const valuesKey in values) {
    // console.log(values[valuesKey])
    mensaje += values[valuesKey];
  }
  return mensaje;
};
