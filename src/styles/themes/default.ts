const defaultTheme = {
    colors: {
        'gray-900': '#0f172a',
        'gray-700': '#1e293b',
        'gray-300': '#CBD5E1',
        'text': '#f8fafc',
        'primary': '#0ea5e9',
        'primary-variant': '#38bdf8',
        'glass': 'rgba(255,255,255,0.05)',
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
    },
    breakpoints: {
        mobile: '768px',
    },
} as const;

export type DefaultThemeType = typeof defaultTheme;
export default defaultTheme;