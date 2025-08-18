import { useForm } from "react-hook-form";
import React from "react";
import { ContactContainer, ContactForm, SubmitButton } from './styles';
import emailjs from '@emailjs/browser';

interface FormData {
    nome: string;
    email: string;
    mensagem: string;
}

export const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const serviceID = 'service_l587jbm';
        const templateID = 'template_3rlg4kx';
        const publicKey = 'aort615WjgAxTyRn7';

        emailjs.send(serviceID, templateID, { ...data }, publicKey)
            .then(
                (result) => {
                    console.log('Mensagem enviada com sucesso!', result.text);
                    reset();
                },
                (error) => {
                    console.error('Falha ao enviar a mensagem:', error.text);
                }
            );
    };

    return (
        <ContactContainer id="contato" data-aos="fade-up"
            data-aos-duration="1200"  // Duração em ms
            data-aos-delay="300"      // Atraso em ms
            data-aos-offset="200"     // Distância antes de ativar
            data-aos-easing="ease-in-out" // Tipo de easing
            >
            <h2>Contato</h2>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("nome", { required: "O nome é obrigatório" })}
                    placeholder="Seu nome"
                />
                {errors.nome && <span>{errors.nome.message}</span>}

                <input
                    type="email"
                    {...register("email", { required: "O email é obrigatório" })}
                    placeholder="Seu e-mail"
                />
                {errors.email && <span>{errors.email.message}</span>}

                <textarea
                    {...register("mensagem", { required: "A mensagem é obrigatória" })}
                    placeholder="Sua mensagem"
                />
                {errors.mensagem && <span>{errors.mensagem.message}</span>}

                <SubmitButton type="submit">Enviar</SubmitButton>

                {isSubmitSuccessful && <p>Mensagem enviada com sucesso! 💌</p>}
            </ContactForm>
        </ContactContainer>
    );
};