import React from 'react'
import ContentCard from '../Global/ContentCard'

import './Projects.css'

export default function Projects() {

    const projects = [
        {title: "ThinkSmart", description: "A web application I developed using JavaScript (ReactJS), PHP, MySQL and Firebase. It is an online platform where the user can sign up as an instructor or a student. Instructors have the ability to post video courses involving Programming while students have access to all those courses. The platform also had a built in voice controll tool to assist with navigation. Plus there is a StackOverflow-like feature called Smart Support where users can post questions regarding Programming and other users can answer them."},
        {title: "Bing Rewards Bot", description: "A web crawler designed to automatically log in to microsoft accounts and search random content on Bing in order to generate points. I developed it using the framework Selenium in Python. It is a robust solution that handles login, account unlocking, proxy changing and capcha passing."},
        {title: "FLaskSQL", description: "A Python API I have developed to make connecting to a database as easy as calling a single function, and performing CRUD operations as soon as calling a function and passing in a query string and query paramaters. The API is designed to remove repetitive code while developing RESTful APIs in FLask (Python)."}
    ]

    const projectCards = projects.map(project => {
        return (<ContentCard title={project.title} description={project.description} />)
    })

    return (
        <div className="Projects Container">
            {projectCards}
        </div>
    )
}
