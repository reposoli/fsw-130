
import React from "react";
import {ThemeContextConsumer} from "../themeContext";

function Footer(props) {
    
    return (
        <ThemeContextConsumer>
            {context => (
                <div className="footer-wrapper">
                    <footer className={`${context.theme}-theme`}>
                        <h2>
                            {context.theme === "light" ? "Light" : "Dark"} Theme
                        </h2>
                        <br/>
                        <p>
                            &copy; 2021 - WebDev Student - Soli
                        </p>
                    </footer>
                </div>
            )}
        </ThemeContextConsumer>
    )    
}

export default Footer;