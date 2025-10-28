import styled from 'styled-components';

const bp = {
  md: '768px',
  lg: '1024px',
};

export const HeaderContainer = styled.header`
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin: 0; 
  background: linear-gradient(90deg, #0ea5e9, #38bdf8, #7dd3fc);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 3s linear infinite;

  @keyframes gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`;

export const Burger = styled.button<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2001;

  span {
    height: 3px;
    width: 100%;
    background: #f8fafc;
    border-radius: 10px;
    transition: 0.3s ease;
    transform-origin: center;
  }

  /* Anima em X quando aberto */
  span:nth-child(1) {
    transform: ${({ $open }) => ($open ? 'rotate(45deg) translateY(9px)' : 'rotate(0)')};
  }
  span:nth-child(2) {
    opacity: ${({ $open }) => ($open ? '0' : '1')};
  }
  span:nth-child(3) {
    transform: ${({ $open }) => ($open ? 'rotate(-45deg) translateY(-9px)' : 'rotate(0)')};
  }

  @media (min-width: ${bp.md}) {
    display: none;
  }
`;

export const NavLinks = styled.ul<{ $open: boolean }>`
  list-style: none;
  margin: 0;       
  padding: 0;      
  display: flex;
  align-items: center; 
  gap: 3rem;
  font-size: 1.2rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 2000;

  a {
    position: relative;
    text-decoration: none;
    color: inherit;
    line-height: 1;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0%;
    height: 2px; 
    background-color: currentColor; 
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  @media (max-width: ${bp.md}) {
    position: absolute;
    top: 6rem;
    right: 0;
    flex-direction: column;
    background: rgba(30, 41, 59, 0.95);
    padding: 2rem;
    width: 220px;
    transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(110%)')};
    opacity: ${({ $open }) => ($open ? '1' : '0')};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    border-radius: 8px 0 0 8px;
    gap: 1.25rem;
  }
`;
