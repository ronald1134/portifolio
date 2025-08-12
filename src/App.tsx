import React from 'react'
import { GlobalStyles } from "./styles/GlobalStyle";
import { PortfolioProvider } from "./context/PortfolioContext";
import { Header } from "./components/Header/index";
import { Contact } from "./components/Contact/Contact";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styles/themes/default";


export default function App() {
  return (
    <PortfolioProvider>
      <ThemeProvider theme={ defaultTheme }>
        <GlobalStyles />
        <Header />  
        {/* TODO: colocar o resto dos componentes  */}
        {/* Hero, About, Projects, Skills */}
        <Contact />
      </ThemeProvider>
    </PortfolioProvider>
  );
}
