import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Logo} alt="Logo The NewPaper" />
        </Link>
        <Link className="btn" to="contact">
          Fale Conosco
        </Link>
      </header>
    </>
  );
};
