import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <h1>404: Pagina não encontrada</h1>
      <Link to="/"> Retornar para Home</Link>
    </>
  );
};
