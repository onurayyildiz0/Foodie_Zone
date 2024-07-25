import React, { useState, useEffect } from 'react';
import Dark from '../images/dark.png';
import Light from '../images/light.png';

function DarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const element = document.documentElement;
    
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <>
            <div className='relative'>
                <img src={Dark} onClick={changeTheme} className={`w-12 h-12 absolute right-0 z-10 cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-100" : "opacity-0"}`} />
                <img src={Light} onClick={changeTheme} className={`w-12 h-12 absolute right-0 z-10 cursor-pointer transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
            </div>
        </>
    )
}

export default DarkMode;
