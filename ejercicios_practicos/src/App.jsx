import { BotonPrincipal } from "./components/BotonPrincipal/BotonPrincipal.jsx";
import { Jugadores } from "./components/Jugadores/Jugadores.jsx";
import jugadores from "./assets/jugadores.json";

function App() {
  return (
    <>
      <BotonPrincipal />
      {jugadores.map((j) => (
        <Jugadores
          nombre={j.firstName}
          apellido={j.lastName}
          expulsado={j.expulsado}
        />
      ))}
    </>
  );
}

export { App };
