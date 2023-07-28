function BotonPrincipal() {
  function handleClick() {
    console.log("BotonPrincipal clickeado");
  }
  return (
    <button
      style={{ backgroundColor: "blue", color: "#FFF", marginLeft: "15px" }}
      onClick={handleClick}
    >
      Clickeame
    </button>
  );
}

export { BotonPrincipal };
