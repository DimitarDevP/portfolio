import React from 'react'
import ContentCard from '../Global/ContentCard'

import './Skills.css'

export default function Skills() {

    const skills = [
        {title: "JavaScript", description: "I've been actively working with JavaScript for over 3 years now and have gained quite a bit of experience. From those 3 years, I spent 2 years writing vanilla JavaScript and 1 year writing ReactJS."},
        {title: "React JS", description: "I have 1 year of active experience with ReactJS. I am fairly familiar with the framework and able to work with it. I do not posses a lot of experience regarding global state managment, but I posses theoretical knowledge of Redux."},
        {title: "PHP", description: "I have basic understanding of the language and used it to build RESTful APIs when I was starting out with backend development"},
        {title: "Python", description: "I have 2 years of experience with Python. The 3 main areas where I applied Python was Computer Vision, development of REST APIs and Browser Automation."},
        {title: "C++", description: "C++ was the first language I learnt. I posses an intermediate knowledge of the language and have applied it in OpenCV and OpenGL."},
        {title: "Java", description: "I have minimal understanding of Java. I used the language to obtain data from mobile sensors and display it on the screen of a mobile device."},
        {title: "Pascal", description: "I have basic understanding of Pascal and it's framework Delphi. I have created a few basic desktop applications using it."},
        {title: "MySQL", description: "I have an intermediate level of understanding MySQL. I am able to design databases, link tables and execute queries."}
    ]

    const skillCards = skills.map(skill => {
        return (<ContentCard title={skill.title} description={skill.description} />)
    })

    return (
        <div className="Skills Container">
            {skillCards}
        </div>
    )
}
