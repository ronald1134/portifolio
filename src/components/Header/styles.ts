// components/Header/styles.ts
import styled from 'styled-components';

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
`;

export const Navbar = styled.nav`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`

  display: flex;
  width: 100%;
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

export const NavLinks = styled.ul`
  display: flex;
  align-items: center; 
  justify-content: end;
  gap: 3rem;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;

  a {
    position: relative;
    text-decoration: none;
    color: inherit;
    line-height: 1; /* <-- mantém alinhado com o Logo */
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
`;
