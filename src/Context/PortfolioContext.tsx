// src/context/PortfolioContext.tsx
import { createContext, ReactNode, useContext } from "react";

interface Project {
    title: string;
    image: string;
    link: string;
}

interface PortfolioContextProps {
    projects: Project[];
    skills: string[];
}

const PortfolioContext = createContext({} as PortfolioContextProps);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    const projects: Project[] = [
        { title: "Projeto 1", image: "/assets/image/projeto_serviço.png", link: "https://ronald1134.github.io/Project_forms/" },
        { title: "Projeto 2", image: "/assets/image/landing-page.png", link: "https://ronald1134.github.io/landing-food/" },
        // ...
    ];

    const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "MySQL"];

    return (
        <PortfolioContext.Provider value={{ projects, skills }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => useContext(PortfolioContext);
