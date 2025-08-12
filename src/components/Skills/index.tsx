// index.tsx
import React from 'react'
import { SkillsSection, Title, SkillsList, SkillItem } from './styles'

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Bootstrap',
    'My SQL',
]

export const Skills: React.FC = () => {
    return (
        <SkillsSection id="habilidades" className="section">
            <Title>Habilidades</Title>
            <SkillsList>
                {skills.map((skill) => (
                    <SkillItem key={skill}>{skill}</SkillItem>
                ))}
            </SkillsList>
        </SkillsSection>
    )
}
