import React from "react";
import { AboutContainer, AboutContent, AboutTitle, AboutText, SocialIconsContainer, SocialIconLink } from "./styles";

export function About() {
    return (
        <AboutContainer id="about">
            <AboutContent>
                <AboutTitle>Sobre Mim</AboutTitle>
                <AboutText>
                        <div>
                            Olá! Me chamo <strong>Ronald Oliveira</strong>, tenho 20 anos <br /><br /> e sou estudante de 
                            <strong>Análise e Desenvolvimento de Sistemas </strong>
                            na <strong>Faculdade Impacta</strong>.
                            🤓<br /><br />
                            Desde cedo me encantei pelo mundo da tecnologia, o que me levou a explorar tanto o universo do
                            <strong>desenvolvimento front-end </strong>
                            quanto o suporte técnico. <br /><br /> Já tive experiências profissionais
                            em outras áreas, o que me deu uma base sólida de responsabilidade e organização. Agora, estou focado
                            em conquistar minha primeira oportunidade na área tech, onde eu possa aplicar
                            minhas habilidades, crescer profissionalmente e contribuir com projetos reais.<br /><br />
                            Curioso, dedicado e sempre em busca de aprender algo novo.  <br />É assim que encaro cada desafio
                            que aparece pelo caminho. Vamos construir o futuro juntos?
                        </div>
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