import React from "react"
import { Switch, Route } from "react-router-dom"

// CSS
import "./App.css"

// Import pages
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage"

// Import components
import NavBar from "./components/NavBar"

function App() {
	return (
		<div className="App">
			{/* <header className="App-header"></header> */}
			<NavBar />
			<Switch>
				<Route path="/discover" component={DiscoverMoviesPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/" component={HomePage} />
			</Switch>
		</div>
	)
}

export default App
