const Jugadores = ({ nombre, apellido, expulsado }) => {
  let mensajeExpulsado;
  if (expulsado) {
    mensajeExpulsado = "Expulsado: ✔";
  } else {
    mensajeExpulsado = "Expulsado: ❌";
  }

  return (
    <>
      <p style={{ marginLeft: "15px" }}>
        {nombre} {apellido} | {mensajeExpulsado}
      </p>
    </>
  );
};

export { Jugadores };
