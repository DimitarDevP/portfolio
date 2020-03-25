import React from 'react'
import {NavLink} from 'react-router-dom'

import "./Nav.css"

export default function Nav() {
    return (
        <div className="Nav">
            <NavLink to="/">ABOUT ME</NavLink>
            <NavLink to="/skills">SKILL SET</NavLink>
            <NavLink to="/projects">PROJECTS</NavLink>
            <NavLink to="/experience">EXPERIENCE</NavLink>
            <NavLink to="/education">EDUCATION</NavLink>
        </div>
    )
}
