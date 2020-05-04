import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from './Components/Button';
import './App.css';

export default function App() {
	const [checked, setChecked] = useState(true);
	
	return (
		<div className="container flex h-screen w-screen justify-center text-center">
			<div style={{height: '80vh', width: '80vw'}} className="mx-4 p-40 bg-blue-600 rounded-lg self-center text-center relative">
				<div style={{height: '85%', width: '85%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className="bg-blue-500 inline-block p-8 absolute flex-col items-center justify-center leading-8 border-2 border-blue-500 rounded-lg">
					<label className="w-screen clearfix sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" for="uname"><b>Username</b></label>
					<input className="w-full p-2 m-2 rounded-full clearfix sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" type="text" placeholder="Enter Username" name="uname" required />
					<label className="w-screen clearfix sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" for="psw"><b>Password</b></label>
					<input className="w-full p-2 m-2 rounded-full clearfix sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" type="password" placeholder="Enter Password" name="psw" required />
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
