// src/components/Contact/Contact.tsx
import { useForm } from "react-hook-form";
import { ContactContainer, ContactForm, SubmitButton } from './styles';
import React from "react";

interface FormData {
    nome: string;
    email: string;
    mensagem: string;
}

export const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Dados enviados:", data);
        reset();
    };

    return (
        <ContactContainer id="contato">
            <h2>Contato</h2>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
                <input {...register("nome", { required: "O nome é obrigatório" })} placeholder="Seu nome" />
                {errors.nome && <span>{errors.nome.message}</span>}

                <input type="email" {...register("email", { required: "O email é obrigatório" })} placeholder="Seu e-mail" />
                {errors.email && <span>{errors.email.message}</span>}

                <textarea {...register("mensagem", { required: "A mensagem é obrigatória" })} placeholder="Sua mensagem" />
                {errors.mensagem && <span>{errors.mensagem.message}</span>}

                <SubmitButton type="submit">Enviar</SubmitButton>
                {isSubmitSuccessful && <p>Mensagem enviada com sucesso! 💌</p>}
            </ContactForm>
        </ContactContainer>
    );
};
