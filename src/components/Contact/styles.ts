// Contact/styles.ts
import styled from 'styled-components'

export const ContactContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input,
  textarea {
    background: ${(props) => props.theme['gray-800']};
    border: none;
    padding: 1rem;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']};

    &:focus {
      outline: 2px solid ${(props) => props.theme['green-500']};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`

export const SubmitButton = styled.button`
  align-self: flex-start;
  padding: 0.75rem 2rem;
  background: ${(props) => props.theme['green-500']};
  border-radius: 8px;
  color: ${(props) => props.theme['text']};
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['green-300']};
  }
`
