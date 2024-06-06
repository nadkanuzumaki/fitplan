import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "../src/pages/home";
import Workout from "../src/pages/workout";
import About from "../src/pages/about";
import Download from "../src/pages/download";
import Login from "../src/pages/login";
import SignUp from "../src/pages/signup";


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/workout" element={<Workout />} />
				<Route path="/about" element={<About />} />
				<Route path="/download" element={<Download />} />
				<Route path="/login" element={<Login />} />
        		<Route path="/signup" element={<SignUp/>} />
			</Routes>
		</Router>
	);
}

export default App;
