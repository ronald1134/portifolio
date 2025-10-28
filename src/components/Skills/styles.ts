import styled from 'styled-components'

export const SkillsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1100px;
  margin: auto;
`

export const Title = styled.h2`
  font-size: 2rem;
  color: #38bdf8;
  margin-bottom: 2rem;
  text-align: center;
`

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`

export const SkillItem = styled.li`
  background: #1e293b;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  border: 1px solid #0ea5e9;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    background: #0ea5e9;
    color: #0f172a;
  }
`
