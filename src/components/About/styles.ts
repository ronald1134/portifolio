import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme["gray-900"]};
  padding: 4rem 2rem;
`;

export const AboutContent = styled.div`
 max-width: 900px;
 text-align: center;
`;

export const AboutTitle = styled.h2`
 font-size: 2rem;
 color: ${({ theme }) => theme["green-500"]};
  margin-bottom: 1.5rem;
`;

export const AboutText = styled.p`
 font-size: 1.1rem;
 color: ${({ theme }) => theme["gray-300"]}; 
 line-height: 1.6;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 2rem; /* Adicionado para espaçar os ícones do texto */
  justify-content: center;
`;

export const SocialIconLink = styled.a`
  font-size: 2.5rem;
  color: #f8fafc;
  transition: transform 0.3s ease;
  
  &:hover {
    color: #0ea5e9;
    transform: translateY(-3px);
  }
`;