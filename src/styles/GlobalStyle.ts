// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(145deg, #0f172a, #1e293b);
    color: #f8fafc;
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: 0.3s ease;
  }

  a:hover {
    color: #0ea5e9;
  }
`;
