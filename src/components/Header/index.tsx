import React, { useState } from "react";
import { HeaderContainer, Logo, NavLinks, Burger } from "./styles";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderContainer>
            <Logo>Ronald Oliveira</Logo>

            <Burger
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
                $open={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span />
                <span />
                <span />
            </Burger>

            <NavLinks $open={menuOpen}>
                <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
                <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
                <a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a>
                <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
            </NavLinks>
        </HeaderContainer>
    );
};
