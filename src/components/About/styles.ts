import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${( props ) => props.theme.colors["gray-900"]};
  padding: 4rem 2rem;
`;

export const AboutContent = styled.div`
  max-width: 900px;
  text-align: center;
`;

export const AboutTitle = styled.h2`
  font-size: 2rem;
  color: ${( props ) => props.theme.colors["green-500"]};
  margin-bottom: 1.5rem;
`;

export const AboutText = styled.div`
  font-size: 1.1rem;
  color: ${( props ) => props.theme.colors["gray-300"]}; 
  line-height: 1.6;
`;

export const SocialIconsContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
`;

export const SocialIconLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 0.9rem;
    transition: transform 0.2s ease, color 0.2s ease;
    
    i {
        font-size: 3rem;
        margin-bottom: 0.3rem;
    }

    span {
        font-size: 0.85rem;
    }

    &:hover {
        transform: scale(1.1);
    }
    
    &.github:hover {
        color: #4a4a4aff; 
    }

    &.linkedin:hover {
        color: #0077b5;
    }

    &.instagram:hover {
        color: #e1306c;
    }

    &.instagram:hover {
    background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;