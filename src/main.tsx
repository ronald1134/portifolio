// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import defaultTheme, { DefaultThemeType } from './styles/themes/default.ts';
import { GlobalStyles } from './styles/GlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);