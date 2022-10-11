import React from "react";

export default function Footer(){
    return(
        <div className="footer-section">
            <div className="media-links">
                <div className="git-link">
                <a className="links" id="JaRonWillis_GitHub_a" 
                    target="_blank" 
                     href="https://github.com/JaRonWillis">
                        
                <img className="icon" src="Images\github-logo.png" 
                    height="50px" 
                    alt="JaRonWillis_GitHub_img"/>  
                </a> 
                </div>
                <div className="codePen-link">
                <a className="links" id="mordecaiplays_CodePen_a" 
                    target="_blank" 
                    href="https://codepen.io/mordecaiplays">
                <img className="icon" src="Images\1298732_codepen_icon (1).png" 
                    height="50px" 
                    alt="mordecaiplays_CodePen_img"/>  
                </a> 
                </div>
            </div>

        </div>
    );
}