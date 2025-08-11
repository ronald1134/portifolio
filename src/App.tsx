import { GlobalStyles } from "./styles/GlobalStyle";
import { PortfolioProvider } from "./context/PortfolioContext";
import { Header } from "./components/Header/index";
import { Contact } from "./components/Contact/Contact";

export default function App() {
  return (
    <PortfolioProvider>
      <GlobalStyles />
      <Header />
      {/* Hero, About, Projects, Skills */}
      <Contact />
    </PortfolioProvider>
  );
}
