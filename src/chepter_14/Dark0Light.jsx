import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function Dark0rLight(props) {
    const [theme, setTheme]= useState("light");
    const toggleTheme=useCallback(()=>{
        if (theme=="light"){
            setTheme("dark");

        } else if (theme=="dark") {
            setTheme("light");
        }
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme,toggleTheme}}>
            <MainContent/>

        </ThemeContext.Provider>
    );
}

export default Dark0rLight;
