import React from "react";
import { AboutContainer, AboutContent, AboutTitle, AboutText, SocialIconsContainer, SocialIconLink } from "./styles";

export function About() {
    return (
        <AboutContainer id="about">
            <AboutContent>
                <AboutTitle>Sobre Mim</AboutTitle>
                <AboutText>
                    Olá! Meu nome é Ronald e sou apaixonado por tecnologia e desenvolvimento front-end.
                    Sempre busco aprender novas ferramentas e criar experiências 
                    visuais agradáveis e funcionais.
                </AboutText>
                <SocialIconsContainer>
                    <SocialIconLink href="https://github.com/ronald1134" target="_blank"><i className="fab fa-github">GitHub</i></SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/ronald-oliveira77/" target="_blank"><i className="fab fa-linkedin">LinkedIn</i></SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/ronald_oliveira_1/" target="_blank"><i className="fab fa-instagram">Instagram</i></SocialIconLink>
                </SocialIconsContainer>
            </AboutContent>
        </AboutContainer>
    );
}