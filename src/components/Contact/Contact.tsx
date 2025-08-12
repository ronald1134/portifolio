// src/components/Contact/Contact.tsx
import { useForm } from "react-hook-form";
import { Container } from "../Header/styles";
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

    


 // TODO: implementar o envio do formulário

    return (
        <Container id="contato">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("nome", { required: "O nome é obrigatório" })} placeholder="Seu nome" />
                {errors.nome && <span>{errors.nome.message}</span>}

                <input type="email" {...register("email", { required: "O email é obrigatório" })} placeholder="Seu e-mail" />
                {errors.email && <span>{errors.email.message}</span>}

                <textarea {...register("mensagem", { required: "A mensagem é obrigatória" })} placeholder="Sua mensagem" />
                {errors.mensagem && <span>{errors.mensagem.message}</span>}

                <button type="submit">Enviar</button>

                {isSubmitSuccessful && <p>Mensagem enviada com sucesso! 💌</p>}
            </form>
        </Container>
    );
};
