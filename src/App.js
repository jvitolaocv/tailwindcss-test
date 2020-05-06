import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from './Components/Button';
import './App.css';

export default function App() {
	const [checked, setChecked] = useState(true);
	
	return (
		<div className="container flex h-screen w-screen justify-center text-center">
			<div style={{height: '50vh', width: '50vw'}} className="mx-4 p-40 bg-blue-600 rounded-lg self-center relative">
				<div style={{height: '85%', width: '85%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className="bg-blue-500 inline-block p-8 absolute flex flex-col items-center justify-center leading-8 rounded-lg">
					<label className="clearfix sm:text-md md:text-lg lg:text-xl xl:text-2xl" htmlFor="uname"><b>Username</b></label>
					<input className="w-9/12 px-2 py-1 m-2 rounded-full clearfix sm:text-md md:text-lg lg:text-xl xl:text-2xl" type="text" placeholder="Enter Username" name="uname" required />
					<label className="clearfix sm:text-md md:text-lg lg:text-xl xl:text-2xl" htmlFor="psw"><b>Password</b></label>
					<input className="w-9/12 px-2 py-1 m-2 rounded-full clearfix sm:text-md md:text-lg lg:text-xl xl:text-2xl" type="password" placeholder="Enter Password" name="psw" required />
					<Link to="/Authenticated">
						<Button buttonText="Login" />
					</Link>
					<div className="block">
						<input className="rounded-lg" type="checkbox" onChange={() => (setChecked(!checked))} checked={checked} name="remember" />
						<label> Remember Me</label>
					</div>
				</div>
			</div>
		</div>
	);
};