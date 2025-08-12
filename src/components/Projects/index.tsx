import React from "react";
import { ProjectsContainer, ProjectsGrid, ProjectCard, ProjectTitle, ProjectDescription } from "./styles";

export function Projects() {
    return (
        <ProjectsContainer id="projects">
            <h2>Meus Projetos</h2>
            <ProjectsGrid>
                <ProjectCard>
                    <ProjectTitle>Portfolio</ProjectTitle>
                    <ProjectDescription>
                        Meu portfólio pessoal desenvolvido com React, TypeScript e Styled-Components.
                    </ProjectDescription>
                </ProjectCard>

                <ProjectCard>
                    <ProjectTitle>CRUD de Tarefas</ProjectTitle>
                    <ProjectDescription>
                        Aplicação para gerenciar tarefas com Create, Read, Update e Delete.
                    </ProjectDescription>
                </ProjectCard>

                <ProjectCard>
                    <ProjectTitle>Landing Page</ProjectTitle>
                    <ProjectDescription>
                        Página institucional responsiva para apresentação de serviços.
                    </ProjectDescription>
                </ProjectCard>
            </ProjectsGrid>
        </ProjectsContainer>
    );
}
