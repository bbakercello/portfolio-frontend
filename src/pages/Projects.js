import React from 'react';
import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);



 // create function to make api call
 const getProjectsData = async () => {
    
  // make api call and get response
  const response = await fetch(props.URL + "projects");
  
  // turn response into javascript object
  const data = await response.json();
  
  // set the about state to the data
  setProjects(data);
};

// make an initial call for the data inside a useEffect, so it only happens once on component load
useEffect(() => {getProjectsData()}, []);


  // define a function that will return the JSX needed once we get the data
const loaded = () => {
  console.log(projects)
return(
  <>
  {projects.map((project, index, projects) => (
    <div className="project-container" key={index}>
      
      <h1>{project.name}</h1>
      <img className="project-photo" src={project.image} alt="project"/>
      <div className="project-links">
      <a href={project.git}>
      <button>Github</button>
      </a>
      <a href={project.live}>
      <button>live site</button> 
      </a>

      </div>
      
    </div>
    ))}
  </>
)}
  
  

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;