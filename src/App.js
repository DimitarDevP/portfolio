// Dependencies 
import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"

// Components
import Nav from "./Components/Nav/Nav"
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Education from './Components/Education/Education'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'

// Style
import './App.css'


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Route exact path="/portfolio/" component={About} />
				<Route path="portfolio/skills" component={Skills} />
				<Route path="portfolio/projects" component={Projects} />
				<Route path="portfolio/experience" component={Experience} />
				<Route path="portfolio/education" component={Education} />
			</BrowserRouter>
		</div>
	)
}

export default App
