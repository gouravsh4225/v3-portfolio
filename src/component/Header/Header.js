import React from 'react';
import ProfileImage from "../../assets/profile__image.jpg"
import "./Header.scss"

function Header() {
    
    return (
        <div className="header">
            <div className="container">
                <div className="d-flex align-item-center navbar">
                    <a className="navbar__band cursor-pointer ">
                        <img src={ProfileImage} alt="logo" className="rounded-full"/>
                    </a>
                    <div className="navbar__icon rounded-full">
                        <div className="hambuger_icon"></div>
                        <div className="hambuger_icon"></div>
                        <div className="hambuger_icon"></div>
                    </div>
                    <ul className="d-flex navbar__lists ml-auto ">
                        <li className="navbar__list pl-16 pr-16 cursor-pointer">
                            <a href="#" className="navbar__item active">Home</a>
                        </li>
                        <li className="navbar__list pl-16 pr-16 cursor-pointer">
                            <a href="#" className="navbar__item ">About</a>
                        </li>
                        <li className="navbar__list pl-16 pr-16 cursor-pointer">
                            <a href="#" className="navbar__item">Work</a>
                        </li>
                        <li className="navbar__list pl-16 pr-16 cursor-pointer">
                            <a href="#" className="navbar__item">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header