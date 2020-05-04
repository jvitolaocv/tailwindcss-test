import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default function App() {
	return (
		<div className="container text-center flex justify-center h-screen w-screen">
			<div className="max-w-md min-w-md text-center self-center">
				<div className="w-full">
				<h3 className="text-gray-darkest">Log in</h3>
				</div>
				<p>Email Address</p>
				<input type="email" placeholder="e.g example@gmail.com" className="border-2 p-2 w-64"></input>
				<p>Password</p>
				<input type="password" placeholder="xxxxxxxxx" className="border-2 p-2 w-full"></input>
				<Link to="/Page"><div><button className="my-2 bg-green-600 rounded-full px-6 py-2">Login</button></div>
				</Link>
			</div>
		</div>
	);
};
