import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from './Components/Button';
import './App.css';

export default function App() {
	const [checked, setChecked] = useState(true);
	
	return (
		<div className="container flex h-screen w-screen justify-center">
			<div className="h-64 w-64 p-40 bg-blue-600 rounded-lg self-center text-center relative">
				<div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className="bg-blue-500 h-64 w-64 inline-block m-auto p-4 absolute flex-col items-center justify-center leading-8 border-2 border-blue-500 rounded-lg">
					<label for="uname"><b>Username</b></label>
					<input className="px-4 rounded-full" type="text" placeholder="Enter Username" name="uname" required />
					<label for="psw"><b>Password</b></label>
					<input className="px-4 rounded-full" type="password" placeholder="Enter Password" name="psw" required />
					<Link to="/Authenticated">
						<Button buttonText="Login" />
					</Link>
					<div className="block">
						<input className="rounded-lg" type="checkbox" onClick={() => (setChecked(!checked))} checked={checked} name="remember" />
						<label> Remember Me</label>
					</div>
				</div>
			</div>
		</div>
	);
};
