import React from 'react';
import "./Banner.scss"

function Banner({introBanner}) {
    console.log(introBanner)
    return (
        <div className="banner d-flex flex-col">
            <h5 className="banner__title">{introBanner.greeting_message} {introBanner.userName}</h5>
            <h3 className="banner__subtitle">I'm a {introBanner.desination}</h3>
            <p className="banner__para">{introBanner.exprienceDescr} {introBanner.introDescr ? introBanner.introDescr.split('.')[1] : ""} </p>
            <button className="btn banner__contact-btn cursor-pointer">
                <span>Contact me</span>
                </button>
        </div>
    )
}

export default Banner
