import { ContactForm } from "../../Components/Forms/ContactForms";
import contato from "../../assets/ContactIllustration.jpg";
export const ContactPage = () => {
  return (
    <>
      <div className="container">
        <img src={contato} alt="Ilustração Contato" />
        <div>
          <h1 className="title one">Fale Conosco</h1>
          <p className=" paragraph center">
            Prencha o formulário para enviar uma mensagem
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
};
