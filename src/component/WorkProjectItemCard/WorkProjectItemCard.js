import React from 'react';
import defaultProject from "../../assets/default_project.jpg"
import "./WorkProjectItemCard.scss"

function WorkProjectItemCard(props) {
    console.log(props)
    return (
        <article className="workProjectCard">
            <div className="workProjectCard__image">
            <img 
            src={props.project_image ? props.project_image : defaultProject} alt={props.project_name}/>
            </div>
            <div className="p-16 workProjectContent">
            <h3 className="workProjectCard__title">{props.project_name}</h3>
            <p className="workProjectCard__descr">{props.project_desc}</p>
            </div>
            <div className=""></div>
            {/* <img src */}
        </article>
    )
}

export default WorkProjectItemCard
