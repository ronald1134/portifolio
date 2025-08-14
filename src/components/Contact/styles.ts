import styled from 'styled-components';

export const ContactContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #00bfff; 
    margin-bottom: 2rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    background: #1e293b; 
    border: 1px solid #00bfff;
    padding: 1rem;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;

    &::placeholder {
      color: #94a3b8; 
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 10px #00bfff;
      border-color: #00bfff;
    }
  }

  textarea {
    resize: none;
    min-height: 100px;
  }

  span {
    color: #ff4d4d; 
    font-size: 0.9rem;
    text-align: left;
  }

  p {
    color: #4ade80;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background: #00bfff;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px #00bfff;

  &:hover {
    background: #0099cc;
    box-shadow: 0 0 20px #00bfff;
  }
`;
