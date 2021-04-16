import React from "react";
import {ThemeContextConsumer} from "../themeContext";

function Main(props) {
    
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-background`}>
                    <h1>
                        Click The Button To Change Theme To {context.theme === "light" ? "Dark" : "Light"}
                    </h1>
                    <button 
                        onClick={context.toggleTheme} 
                        className={`${context.theme}-theme`}> 
                        <h3>
                            {context.theme === "light" ? "Dark" : "Light"} 
                            Theme
                        </h3>
                    </button>
                </div>
            )}
        </ThemeContextConsumer>
    )    
}

export default Main;