import React from 'react'
import {NavLink} from 'react-router-dom'

import "./Nav.css"

export default function Nav() {
    return (
        <div className="Nav">
            <NavLink to="/portfolio">ABOUT ME</NavLink>
            <NavLink to="/portfolio/skills">SKILL SET</NavLink>
            <NavLink to="/portfolio/projects">PROJECTS</NavLink>
            <NavLink to="/portfolio/experience">EXPERIENCE</NavLink>
            <NavLink to="/portfolio/education">EDUCATION</NavLink>
        </div>
    )
}
