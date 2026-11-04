function Produto({ nome }) {
  return (
    <article className="produto">
      <h3>{nome}</h3>
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
