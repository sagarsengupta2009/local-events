import { createContext, useState, useEffect } from 'react';

const dbServerPort = 'http://localhost:5000';
const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const selectColorTheme = (binary) => {
        setIsDark(binary);
    }

    return <ColorContext.Provider value={{
        isDark,
        selectColorTheme
    }}>
        {children}
    </ColorContext.Provider>
}

export default ColorContext;