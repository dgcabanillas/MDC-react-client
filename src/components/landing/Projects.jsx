import React from 'react';
import ProjectItem from './items/ProjectItem';

const Projects = () => {

    const projects = [
        {
            title: "PetCare",
            subtitle: "Reserva una cita para tu pequeño compañero",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio commodi aut quod, excepturi odit veritatis blanditiis! Quae, voluptatum quis? Explicabo officia error nihil? Incidunt, itaque? At suscipit sint tempore perferendis, ullam libero odio deleniti dolore aliquam eum cupiditate dolorem odit? Libero ab asperiores provident! Ut tempore recusandae commodi tenetur fugit.",
            image: "/img/projects/veterinaria.png"
        },
        {
            title: "Mi Presupuesto",
            subtitle: "Organiza de la mejor manera tu presupuesto del mes",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio commodi aut quod, excepturi odit veritatis blanditiis! Quae, voluptatum quis? Explicabo officia error nihil? Incidunt, itaque? At suscipit sint tempore perferendis, ullam libero odio deleniti dolore aliquam eum cupiditate dolorem odit? Libero ab asperiores provident! Ut tempore recusandae commodi tenetur fugit.",
            image: "/img/projects/presupuesto.png"
        },
        {
            title: "Space Ship",
            subtitle: "Juego de naves",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio commodi aut quod, excepturi odit veritatis blanditiis! Quae, voluptatum quis? Explicabo officia error nihil? Incidunt, itaque? At suscipit sint tempore perferendis, ullam libero odio deleniti dolore aliquam eum cupiditate dolorem odit? Libero ab asperiores provident! Ut tempore recusandae commodi tenetur fugit.",
            image: "/img/projects/space-ship.png"
        }
    ]; 

    /*
        {
            title: "Sphere Shooter",
            subtitle: "Juego de disparos",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio commodi aut quod, excepturi odit veritatis blanditiis! Quae, voluptatum quis? Explicabo officia error nihil? Incidunt, itaque? At suscipit sint tempore perferendis, ullam libero odio deleniti dolore aliquam eum cupiditate dolorem odit? Libero ab asperiores provident! Ut tempore recusandae commodi tenetur fugit.",
            image: "/img/projects/presupuesto.png"
        }
     */

    return (  
        <section id="projects">
            <div className="projects container">
                <div className="projets-header">
                    <h1 className="section-title"> Some <span>Projects</span> </h1>
                </div>
                <div className="all-projects">
                    {projects.map( ( project, index ) => <ProjectItem key={index} project={ project } /> )}
                </div>
            </div>
        </section>
    );
}
 
export default Projects;

