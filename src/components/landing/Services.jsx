import React from 'react';
import ServiceItem from './items/ServiceItem'

const Services = () => {
    
    const services = [
        {
            index: 0,
            image: "/img/proyectos.png",
            title: "Clases de Programación",
            description: "Dentro de mi experiencia universitaria pude entender que el aprender un lenguaje de programación es algo complicado para la mayoría de los que recién están iniciando. Sumado a esto, la metodología que usan algunos de los profesores no es la más adecuada puesto que terminan confundiendo aún más al alumno. Por ello te ofrezco mi guía para que puedas desarrollar tus habilidades lógicas a la hora de resolver cualquier problema de programación."
        },
        {
            index: 1,
            image: "/img/web.png",
            title: "Desarrollo Web",
            description: "Seguramente eres un emprendedor con maravillosas ideas y sabes que no hay mejor manera de llegar a tu potencial cliente que una página web que resuma todo lo que puedes ofrecer. Si as así, déjame decirte que has llegado al lugar indicado y juntos hagamos realidad esa fantástica idea que revolucionará el sistema digital."
        },
        {
            index: 2,
            image: "/img/macros.png",
            title: "Creación de Macros (VBA)",
            description: "Déjame contarte que tuve la fortuna de trabajar para una empresa dedicada a las microfinanzas, y en esa maravillosa experiencia tuve la oportunidad de entender las necesidades que tenían debido a la inmensa información que ahí se maneja. Por ello fue muy importante para mi aprender a automatizar mi trabajo a través de las macros desarolladas con VBA y el uso de base de datos en SQL. Puedo asegurarte que hubo meses en lo que literalmente me dedicaba a ver cómo mi labor se hacía de manera autónoma y me daba tiempo para realizar otras funciones que escalaron mi vida profesional."
        }
    ];

    return (  
        <section id="services">
            <div className="services container">
                <div className="service-top">
                    <h1 className="section-title"> Serv<span>i</span>cios </h1>
                    <p>
                        A través de los años he ido desarrollando y fortaleciendo mis habilidades como desarrollador de Software de manera autodidacta, y entendiendo la dificultad de los problemas que tuve que superar, vengo a ofrecerte la oportunidad de desarrollar tus propias habilidades o hacer realidad algunas de tus maravillosas ideas sin que tengas las complicaciones que tuve por la falta de un guía.
                    </p>
                </div>
                <div className="service-bottom">
                    {services.map( service => <ServiceItem key={service.index} service={service} /> )}
                </div>
            </div>
        </section>
    );
}
 
export default Services;