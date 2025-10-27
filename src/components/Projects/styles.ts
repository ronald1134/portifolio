import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background-color: ${(props) => props.theme.colors["gray-900"]};

  h2 {
    text-align: center;
    font-size: 2rem;
    color: ${( props ) => props.theme.colors["green-500"]};
    margin-bottom: 3rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled.div`
  background-color: ${( props ) => props.theme.colors["gray-900"]};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  a {
    display: block;
    margin-bottom: 1rem;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 2px solid ${( props ) => props.theme.colors["green-500"]};
`;

export const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: ${( props ) => props.theme.colors["green-500"]};
  margin-bottom: 0.8rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${( props ) => props.theme.colors["gray-300"]};
  line-height: 1.5;

  a {
    color: ${( props ) => props.theme.colors["green-500"]};
    text-decoration: underline;
  }
`;
