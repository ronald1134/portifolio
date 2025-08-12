// src/components/Header/Header.tsx
import { HeaderContainer, Logo, NavLinks } from "./styles";
import React from "react";
export const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Ronald Oliveira</Logo>
            <NavLinks>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contato">Contato</a>
            </NavLinks>
        </HeaderContainer>
    );
};
