import React from 'react'
import '../Global/Container.css'
import "./About.css"

export default function About() {
    return (
        <div className="About Container">
            <img src="/Profile.jpg" />
            <h3>Personal Information: </h3>
            <p>
                My name is Dimitar Veljanovski and I am a self thought software engineer. I first started coding when I was 12 years old 
                and it's been my passion ever since.
            </p>
            <p>
                My favorite language is Python because of it's clean and straight foreward syntax
                which is beginner friendly and readable. Furthermore, the language has a huge community around it. The language I have worked
                with the most is JavaScript and it is one of my favorite languages.
            </p>
            <p>
                I am an active user of Social Media. The platforms I am most active on are Quora and Twitter. I use Quora mainly to help out 
                other developers/engineers and to ask questions if I am stuck or in need of help or advise. 
            </p>
            <p>
                When taking on a more complex project I like to spend a few days planning to avoid any complications later on. If I am working 
                on a web application, I like to create a diagram of all the components I will need to create, write a list of all the routes and requests 
                my REST api will need to handle, design connect and normalize my database, create sketches for the design I am planning to use 
                and define all the colors, fonts, and screen sizes I am planning to use in development.
            </p>
        </div>
    )
}
