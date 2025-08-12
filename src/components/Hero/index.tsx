// src/components/Hero/Hero.tsx
import React from 'react';
import { Container, Content, ProfileImage, Buttons, BackgroundProfile } from "./styles";

export const Hero = () => {
    return (
        <Container>
            <BackgroundProfile />
            <Content>
                <ProfileImage>
                    <img src="src\assets\images\perfil_1.jpg" alt="Ronald Oliveira" />
                </ProfileImage>
                <h2>Olá, eu sou Ronald Oliveira</h2>
                <p>Desenvolvedor Front-End</p>
                <Buttons>
                    <a href="#contato" className="btn">Fale comigo</a>
                    <a href="/docs/curriculo_programador.pdf" download className="btn btn-cv">Download CV</a>
                </Buttons>
            </Content>
        </Container>
    );
};
