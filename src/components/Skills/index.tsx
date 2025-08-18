// index.tsx
import React from 'react'
import { SkillsSection, Title, SkillsList, SkillItem } from './styles'

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'React',
    'TypeScript',
    'Bootstrap',
    'Node.js',
    'My SQL',
    'Express',
    'Git',
    'Jest',
    'Figma',
    
]

export const Skills: React.FC = () => {
    return (
        <SkillsSection id="habilidades" className="section" data-aos="fade-up">
            <Title>Habilidades</Title>
            <SkillsList>
                {skills.map((skill) => (
                    <SkillItem key={skill}>{skill}</SkillItem>
                ))}
            </SkillsList>
        </SkillsSection>
    )
}
