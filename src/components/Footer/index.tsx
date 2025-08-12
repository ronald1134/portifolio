// Footer.tsx
import React from 'react'
import { FooterContainer } from './styles'

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
        <FooterContainer role="contentinfo" aria-label="Rodapé do site">
            <p>© {currentYear} MeuPortfólio. Todos os direitos reservados.
                <br />
                Desenvolvido por <a href="https://github.com/ronald1134" target="_blank">Ronald Oliveira</a>
            </p>
        </FooterContainer>
    )
}
