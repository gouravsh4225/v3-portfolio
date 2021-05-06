import React,{useState,useEffect} from 'react'
import Banner from "./Banner/Banner";
import WorkProjectItemCard from "../WorkProjectItemCard/WorkProjectItemCard";
import {GetApiRequest} from "../../helpers/Api_helper";
import "./Home.scss"

function Home() {
    const [intro,setIntro] = useState({})
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        getIntroDetails();
        getProjectDetails();
    }, []);

    const getIntroDetails = ()=>{
        GetApiRequest('https://gouravsh4225-portfolio-service.herokuapp.com/intro')
        .then((res)=>res.json())
        .then((response)=>setIntro(response.intro_deatils))
        .catch((error)=>console.log(error,'errorr'))
    };

    const getProjectDetails = ()=>{
        GetApiRequest('https://gouravsh4225-portfolio-service.herokuapp.com/project')
        .then((res)=>res.json())
        .then((response)=>{
            setProjects(response.personal_project_list)
        })
        .catch((error)=>console.log(error,'errorr'))
    };


    return (
        <section className="w-full">
        <section className="container d-flex flex-col">
            <Banner introBanner={intro} />
                <div className="work__container">
                    <h1 className="text-center work__heading">Projects Sample</h1>
                    <div className="projects__list d-grid grid-col-3">
                    {projects.map((item,index)=>(
                        <WorkProjectItemCard {...item}  key={index}/>
                    ))}
                    </div>
                    <div className="text-center mb-16 mt-16">Want to see more project <a href="" >Go to work page</a> </div>
                </div>
        </section>
        </section>
    )
}

export default Home
