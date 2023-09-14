import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src="" alt="Logo The NewPaper" />
        </Link>
        <Link to="contact">Fale Conosco</Link>
      </header>
    </>
  );
};
