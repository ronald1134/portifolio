import React from "react";
import {
    ProjectsContainer,
    ProjectsGrid,
    ProjectCard,
    ProjectTitle,
    ProjectDescription,
    ProjectImage
} from "./styles";

export function Projects() {
    return (
        <ProjectsContainer id="projetos">
            <h2 data-aos="fade-up">Meus Projetos</h2>
            <ProjectsGrid data-aos="fade-up"
                data-aos-duration="1200"  // Duração em ms
                data-aos-delay="300"      // Atraso em ms
                data-aos-offset="200"     // Distância antes de ativar
                data-aos-easing="ease-in-out" // Tipo de easing
                >
                <ProjectCard>
                    <a href="https://timer-ronald1134s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <ProjectImage src="/images/timer.png" alt="Preview do Temporizador" />
                    </a>
                    <ProjectTitle>Temporizador</ProjectTitle>
                    <ProjectDescription>
                        Um temporizador simples desenvolvido com React e TypeScript.
                    </ProjectDescription>
                </ProjectCard>

                <ProjectCard>
                    <a href="https://react-feed-sooty.vercel.app/#" target="_blank" rel="noopener noreferrer">
                        <ProjectImage src="/images/feed.png" alt="Preview do Feed Page" />
                    </a>
                    <ProjectTitle>Feed Page</ProjectTitle>
                    <ProjectDescription>
                        Página de feed de redes sociais desenvolvida com React e TypeScript.
                    </ProjectDescription>
                </ProjectCard>

                <ProjectCard>
                    <a href="https://ronald1134.github.io/Project_forms/" target="_blank" rel="noopener noreferrer">
                        <ProjectImage src="/images/backOffice.png" alt="Preview do BackOffice" />
                    </a>
                    <ProjectTitle>BackOffice</ProjectTitle>
                    <ProjectDescription>
                        Essa aplicação foi feita para gerenciar registros de dados de colaboradores.<br /><br />
                        Fiz em colaboração com meu amigo <a href="https://github.com/GGNOOB1">Geraldo Vicente</a>
                    </ProjectDescription>
                </ProjectCard>

                <ProjectCard>
                    <a href="https://ronald1134.github.io/projeto-login1.0/" target="_blank" rel="noopener noreferrer">
                        <ProjectImage src="/images/login page.png" alt="Preview da Login Page" />
                    </a>
                    <ProjectTitle>Login Page</ProjectTitle>
                    <ProjectDescription>
                        Página de login desenvolvida com HTML, CSS3 e JavaScript, contém responsividade.
                    </ProjectDescription>
                </ProjectCard>

            </ProjectsGrid>
        </ProjectsContainer>
    );
}
