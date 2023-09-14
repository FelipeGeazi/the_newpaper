import { Footer } from "../Footer";
import { Header } from "../Header";

// eslint-disable-next-line react/prop-types
export const Template = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
