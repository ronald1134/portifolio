// Footer.styles.ts
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background: #1e293b;
  color: #94a3b8;
  font-size: 0.9rem;
  margin-top: 4rem;
`
export const FooterText = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #cbd5e1;

  a {
    color: #60a5fa;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`