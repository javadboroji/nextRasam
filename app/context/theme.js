'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <ThemeContext.Provider value={{ inputSearch, setInputSearch}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);