import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

export default function App() {
	return (
		<div className="container flex h-screen w-screen justify-center">
			<div className="h-64 w-64 p-64 bg-gray-200 border-2 border-gray-400 rounded-lg self-center text-center relative">
				<div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className="h-64 w-64 inline-block m-auto p-4 absolute flex-col items-center justify-center leading-8 border-2 rounded-lg">
					<label for="uname"><b>Username</b></label>
					<input className="p-1" type="text" placeholder="Enter Username" name="uname" required />
					<label for="psw"><b>Password</b></label>
					<input className="p-1" type="password" placeholder="Enter Password" name="psw" required />
					<Link to="/Authenticated">
						<button className="border-2 rounded-lg px-4 mt-2" type="submit">Login</button>
					</Link>
					<label className="block">
						<input type="checkbox" checked="checked" name="remember" />
						<label> Remember Me</label>
					</label>
				</div>
			</div>
		</div>
	);
};
