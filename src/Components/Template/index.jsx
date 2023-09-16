import { Footer } from "../Footer";
import { Header } from "../Header";

// eslint-disable-next-line react/prop-types
export const Template = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
