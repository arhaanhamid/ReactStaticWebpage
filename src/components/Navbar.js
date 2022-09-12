import React from "react";
import Image from "../Images/logo.png"
function Navbar() {
    return (
        <div className="navBar">
            <div className="nav-logo">
                <img src={Image} alt="Logo"/>
                <h1 className="nav-title1">React Facts</h1>
            </div>
            <h1 className="nav-title2">React Course - Project 1</h1>
        </div>
    )
}
export default Navbar