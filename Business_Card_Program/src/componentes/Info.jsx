import React from "react";

export default function Info(){
    return(
    <div className="Container">
        

        <div className="bio-section">
            <div className="Picture-section">
            <header className="headers">
                <img className="Profile-pic" 
                src="Images\IMG_20220513_164351651_HDR.jpg" 
                alt="Jaron-Willis" 
                 />
            </header>
        </div>
                    <h1 className="MyName">Jaron P Willis</h1>
                    <h2 className="Ocupation">Full-Stack Java Developer</h2>
                    <h3 className="Web">Website comming later</h3>
            <div className="contacts">
                <a className="link" href="jaronperrywillis@gmail.com" 
                    alt="Jarons-email">
                <img src="Images\Mail.png" 
                    alt="email-img" />
                </a>

                <a className="link"  href="https://www.linkedin.com/in/jaron-willis/" 
                    alt="Jarons-linkedin">
                <img src="Images\linkedin.png" 
                    alt="linkedin-img" />
                </a>
            </div>
        </div>



    </div>
    );
}
