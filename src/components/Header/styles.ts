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
`;

export const Navbar = styled.nav`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #0ea5e9, #38bdf8, #7dd3fc);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 3s linear infinite;

  span {
    font-weight: 400;
    display: inline;
    font-size: 0.8em;
  }

  @keyframes gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  li a {
    font-weight: 500;
    position: relative;
  }

  li a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #38bdf8;
    transition: 0.3s;
  }

  li a:hover::after {
    width: 100%;
  }
`;
