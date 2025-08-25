import styled, { keyframes } from 'styled-components';

const flutuar = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const gradient = keyframes`
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
`;

export const Container = styled.section`
  min-height: 80vh;
  padding: 2rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  color: ${(props) => props.theme['text']};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${(props) => props.theme['gray-900']};
    opacity: 0.7;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  color: ${(props) => props.theme['white']};

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 0px 0px 10px #0ea5e9;
    animation: ${flutuar} 4s ease-in-out infinite;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const ProfileImage = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${(props) => props.theme['primary']};
  box-shadow: 0 0 20px ${(props) => props.theme['primary']};

  img {
    width: 100%;
    height: 125%;
    object-fit: cover;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  .btn {
    background: ${(props) => props.theme['colors']['primary']};
    color: #fff;
    padding: 0.9rem 2rem;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
    box-shadow: 0 0 15px ${(props) => props.theme['colors']['primary']};

    &:hover {
      background: ${(props) => props.theme['colors']['primary-variant']};
      box-shadow: 0 0 25px ${(props) => props.theme['colors']['primary']};
      transform: scale(1.05);
      color: #ffffff;
    }
  }

  .btn-cv {
    background: transparent;
    border: 2px solid ${(props) => props.theme['colors']['primary']};
    box-shadow: none;
    
    &:hover {
      background: rgba(14, 165, 233, 0.1);
    }
  }

  @media (max-width: ${(props) => props.theme['breakpoints']['mobile']}) {
    flex-direction: column;
    align-items: center;

    .btn {
      width: 100%;
      max-width: 250px;
      text-align: center;
    }
  }
`;