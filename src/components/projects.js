import React from 'react'
import detail from "../images/detail_2.png"
import project1 from '../images/project1.png'
import project2 from "../images/Brika.png"
import project3 from '../images/BHP_V2_04.jpg'
import project4 from '../images/COPEC_01.jpg'
import project5 from '../images/project5.png'


const projects = () => {
  return (
    <section className="projects">
      <div className="project-title">
        <h3>Proyectos</h3>
        <img
          src={detail}
          alt="detail"
          className="project-detail"
        />
      </div>
      <div className="project-body">
        <div className="one">
          <ul>
            <li>
              <div>
                <img src={project1} alt="img" />
              </div>
              <h5>App Súmate a lo verde</h5>
            </li>
            <li>
              <div>
                <img src={project2} alt="img" />
              </div>
              <h5>Proyecto Titulo</h5>
            </li>
          </ul>
        </div>
        <div className="two">
          <ul>
            <li>
              <div>
                <img src={project3} alt="img" />
              </div>
              <h5>Cafeteria BHP</h5>
            </li>
            <li>
              <div>
                <img src={project4} alt="img" />
              </div>
              <h5>3D Copec</h5>
            </li>
            <li>
              <div>
                <img src={project5} alt="img" />
              </div>
              <h5>Proyecto Patrem</h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default projects
