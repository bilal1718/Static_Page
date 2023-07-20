import React from "react";
export default function Header(props) {
    return (
        <header>
            <nav className={props.darkMode ? "dark": "" }>
                <img src="favicon.ico" className='nav-icon' />
                <h3 className="logoText">ReactProject</h3>
                <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode} >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            </nav>
        </header>
    )
}