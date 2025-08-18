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
        <ProjectsContainer id="projects">
            <h2>Meus Projetos</h2>
            <ProjectsGrid>
{/* TODO: Implementar os cards dos projetos */}
                <ProjectCard> 
                    <a href="https://timer-ronald1134s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <ProjectImage src="src/assets/images/timer.png" alt="Preview do Temporizador" />
                    </a>
                    <ProjectTitle>Temporizador</ProjectTitle>
                    <ProjectDescription>
                        Um temporizador simples desenvolvido com React e TypeScript.
                    </ProjectDescription>
                </ProjectCard>

                <ProjectCard>
                    <a href="https://react-feed-sooty.vercel.app/#" target="_blank" rel="noopener noreferrer">
                        <ProjectImage src="src/assets/images/feed.png" alt="Preview do Feed Page" />
                    </a>
                    <ProjectTitle>Feed Page</ProjectTitle>
                    <ProjectDescription>
                        Página de feed de redes sociais desenvolvida com React e TypeScript.
                    </ProjectDescription>
                </ProjectCard>

                <ProjectCard>
                    <a href="https://ronald1134.github.io/Project_forms/" target="_blank" rel="noopener noreferrer">
                        <ProjectImage src="src/assets/images/backoffice.png" alt="Preview do BackOffice" />
                    </a>
                    <ProjectTitle>BackOffice</ProjectTitle>
                    <ProjectDescription>
                        Essa aplicação foi feita para gerenciar registros de dados de colaboradores.<br /><br />
                        Fiz em colaboração com meu amigo <a href="https://github.com/GGNOOB1">Geraldo Vicente</a>
                    </ProjectDescription>
                </ProjectCard>

                <ProjectCard>
                    <a href="https://ronald1134.github.io/projeto-login1.0/" target="_blank" rel="noopener noreferrer">
                        <ProjectImage src="src/assets/images/login page.png" alt="Preview da Login Page" />
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
