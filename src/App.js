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
				<Route exact path="/" component={About} />
				<Route path="/skills" component={Skills} />
				<Route path="/projects" component={Projects} />
				<Route path="/experience" component={Experience} />
				<Route path="/education" component={Education} />
			</BrowserRouter>
		</div>
	)
}

export default App
