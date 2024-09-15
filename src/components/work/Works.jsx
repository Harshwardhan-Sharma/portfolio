import React, { useEffect, useState } from 'react'
import {projectsData} from './Data';
import {projectsNav} from './Data';
import WorkItemsOdd from './WorkItemsOdd';

const Works = () => {

    const [item , setItem] = useState({
        name: 'all'});

    const [projects, setProjects] = useState([]);  

    const [active, setActive] = useState(0);

    const [currentPage , setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    useEffect(() => {

        if(item.name === 'all'){
            setProjects(projectsData)
        }else{
            const newProjects = projectsData.filter((project) => {
                return project.category.includes(item.name)
            });
            setProjects(newProjects)
        }
        setCurrentPage(1);
    }, [item]);


    const handleClick = (e, index) => {
        setItem({name: e.target.textContent});
        setActive(index);
    }

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleShowLess = () => {
        setCurrentPage(1); // Reset back to the first page
    };

    const displyedProjects = projects.slice(0, currentPage * itemsPerPage);


  return (
   <div>
     <div className="work__filters">
        {projectsNav.map((item, index) => {
            return (
                <span onClick={(e)=>{handleClick(e, index)}} key={index} className={active === index ? 'work__item active-work' : 'work__item'}>
                    {item.name}
                </span>
            )
        })}
    </div>

    <div className="work__container container grid">
        {displyedProjects.map((item) => {
            return <WorkItemsOdd key={item.id} item={item}/>
        })}
    </div>

    <div className="work__buttons-container">
    {projects.length > displyedProjects.length && ( <button className="work__load-more" onClick={handleLoadMore}>Load More <i className="bx bx-down-arrow-alt work__load-more-icon"></i> </button>
    )}

    {currentPage > 1 && ( <button className="work__show-less" onClick={handleShowLess}>Show Less <i className="bx bx-up-arrow-alt work__show-less-icon"></i> </button>
    )}
    </div>
       

   </div>

  )
}

export default Works
