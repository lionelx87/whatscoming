import { useEffect, useState } from 'react'
import Logo from '../../../src/assets/images/logo.png'
import { MoonIcon, SunIcon } from '../icons'

export const Header = () => {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    // const handleClickToggleTheme = () => {}

    return (
        <div className="flex justify-between container mx-auto px-4 py-4">
            <h1>
                <img src={Logo} alt="Logo" className="w-40" />
            </h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode ? <SunIcon /> : <MoonIcon />
                }                
            </button>
        </div>
    )
}