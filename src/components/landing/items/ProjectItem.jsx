import React from 'react';

const ProjectItem = ( {project} ) => {

    const imgStyle = { 
        backgroundImage: "url(" + project.image + ")",
        filter: "blur(20px)"
    }
    return (
        <div className="project-item">
            <div className="project-info">
                <h1> { project.title } </h1>
                <h2> { project.subtitle } </h2>
                <p> { project.description } </p>
            </div>
            <div className="project-img">
                <div className="project-img-bg" style={ imgStyle }> </div>
                <div className="project-img-main">
                    <img src={ project.image } alt="img" />
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;