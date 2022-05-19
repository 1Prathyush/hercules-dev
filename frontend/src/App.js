import React from 'react';
import Dash from './componets/Dash';
import Login from './componets/Login';
import Signup from './componets/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componets/Home';
function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/login" component={<Login/>} />
					<Route path="/Signup" element={<Signup/>} />
					<Route path="/Dash" element={<Dash/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
