import React from 'react';
import { Link } from 'react-router-dom';
import * as Constants from '../constants';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = Constants.ProjectItemStyles;

export default function ProjectItem({
    img = projectImg,
    title = "Project Name",
    desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}) {
    return (
        <ProjectItemStyles>
            <Link
                to="/projects"
                className="projectItem__img"
            >
                <img src={img} alt="project img" />
            </Link>
            <div className="projectItem__info">
                <Link
                    to="#"
                >
                    <h3 className="projectItem__title">
                        {title}
                    </h3>
                </Link>
                <p className="projectItem__desc">
                    {desc}
                </p>
            </div>   
        </ProjectItemStyles>
    )
}
