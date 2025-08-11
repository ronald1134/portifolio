// src/components/Header/Header.tsx
import { Container, Logo, NavLinks } from "./styles";

export const Header = () => {
    return (
        <Container>
            <Logo>Ronald <span>Oliveira</span></Logo>
            <NavLinks>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contato">Contato</a>
            </NavLinks>
        </Container>
    );
};
