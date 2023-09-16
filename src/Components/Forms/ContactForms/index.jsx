import { Input } from "./Input";
import { Select } from "./Select";
import { TextArea } from "./TextArea";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "./contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactApi } from "../../../services/api";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(contactFormSchema) });

  const sendEmail = async (formData) => {
    try {
      setLoading(true);
      await contactApi.post("/emails", formData);
      alert("Email enviado com sucesso");
      reset();
    } catch (error) {
      console.log(error);
      alert("Email não enviado");
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const submit = (formData) => {
    sendEmail(formData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="Nome"
        {...register("name")}
        error={errors.name}
      />
      <Input
        type="email"
        placeholder="E-mail"
        {...register("email")}
        error={errors.email}
      />
      <Select

        {...register("departament")}
        error={errors.departament}
      >
        <option value="">Selecione uma área</option>
        <option value="redacao">Redação</option>
        <option value="administrativo">Administração</option>
      </Select>
      <TextArea
        {...register("message")}
        placeholder="Escreva a sua mensagem"
        error={errors.message}
      />
      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Enviando Mensagem" : "Enviar Mensagem"}
      </button>
    </form>
  );
};
