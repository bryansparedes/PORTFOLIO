import { useEffect, useState } from "react"
import { projectData, projectsNav } from "./Data"

const Works = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === 'all'){
            setProjects(projectData);
        } else {
            const newProjects = projectData.filter((project) => {
                return project.category.toLowerCase() === item.name
            });
            setProjects(newProjects);
        }
    },[item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index);
    }

    return (
        <>
        <div className="work__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span onClick={(e) => handleClick(e, index)} 
                    className={`${active === index ? 'active-work' : ''} work__item`} 
                    key={index}>
                        {item.name}
                    </span>
                )
            })}
        </div>
        <div className="work__container container grid">
            {projects.map((item) => {
                return (
                    <div className="work__card" key={item.id}>
                        <img src={item.image} alt="Project Image" className="work__img" />
                        <h3 className="work__title">{item.title}</h3>
                        <a href="#" className="work__button">
                            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                        </a>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Works