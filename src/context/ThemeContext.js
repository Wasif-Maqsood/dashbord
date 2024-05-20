import { createContext, useState } from "react";

export let appThemeContext = createContext();

let ThemeContext = ({ children }) => {

    const [theme, setTheme] = useState(false)
    let handleTheme = () => {
        setTheme(!theme)

        if (!theme) {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#ffffff";
        }
        else {
            document.body.style.background = "#f5f5f5";
            document.body.style.color = "black";
        }
    }
    return <appThemeContext.Provider value={{ handleTheme, theme }}>{children}</appThemeContext.Provider>
}

export default ThemeContext;