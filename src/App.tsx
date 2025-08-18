import React from 'react'
import { GlobalStyle } from "./styles/GlobalStyle";
import { PortfolioProvider } from "./context/PortfolioContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact/Contact";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/themes/default";
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';

import "@fortawesome/fontawesome-free/css/all.min.css";


export default function App() {
  return (
    <PortfolioProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        
        {/* Acessibilidade */}
      </ThemeProvider>
    </PortfolioProvider>
  );
}
