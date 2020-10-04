import React from 'react';

const ProjectItem = ( {project} ) => {
    return (
        <div className="project-item">
            <div className="project-info">
                <h1> { project.title } </h1>
                <h2> { project.subtitle } </h2>
                <p> { project.description } </p>
            </div>
            <div className="project-img">
                <img src={ project.image } alt="img" />
            </div>
        </div>
    );
}

export default ProjectItem;