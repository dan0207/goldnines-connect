import { useEffect, useState } from "react"
import ThemeContext from "../contexts/ThemeContext"


function ThemeProvider({ children }) {
    const [darkMode, setdarkMode] = useState(false)

    const toggleDarkTheme = () => {
        setdarkMode(!darkMode)
    }

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('data-bs-theme',
            darkMode ? 'dark' : 'light');
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkTheme }}>{children}</ThemeContext.Provider>
    )
}


export default ThemeProvider


