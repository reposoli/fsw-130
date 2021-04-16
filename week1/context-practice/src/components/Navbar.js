import React from "react";
import {ThemeContextConsumer} from "../themeContext";

const Navbar = () => {
    return (
        <ThemeContextConsumer>
            {context => (
                <div>
                    <header className={`${context.theme}-theme`}>
                        <ul className='navbarContainer'>
                            <li> Home </li>
                            <li> About </li> 
                            <li> Contact </li>
                        </ul>
                        <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                    </header>
                </div>
            )}
        </ThemeContextConsumer>
    )    
}

export default Navbar;