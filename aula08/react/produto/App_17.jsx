import { useState } from "react";

function Produto({ nome }) {
  const [rotulo, setRotulo] = useState("Adicionar");

  function handleClick() {
    setRotulo("No carrinho");
  }

  return (
    <article className="produto">
      <h3>{nome}</h3>
      <button onClick={handleClick}>{rotulo}</button>
    </article>
  );
}

export default function Catalogo() {
  return (
    <>
      <Produto nome="Açaí" />
      <Produto nome="Farinha d'água" />
      <Produto nome="Polpa de cupuaçu" />
    </>
  );
}
