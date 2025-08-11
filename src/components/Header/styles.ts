// src/components/Header/styles.ts
import styled from "styled-components";

export const Container = styled.header`
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #0ea5e9, #38bdf8, #7dd3fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradient 3s linear infinite;

  @keyframes gradient {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  span {
    font-weight: 400;
    font-size: 0.8em;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    position: relative;
    font-weight: 500;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #38bdf8;
      transition: 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
