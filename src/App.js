import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from './Components/Button';
import './App.css';

export default function App() {
	const [checked, setChecked] = useState(true);
			
			return (
		<div className="container flex h-screen w-screen justify-center text-align-center">
			<div className="sm:h-10/12 sm:w-screen sm:mx-8 p-10 bg-blue-600 rounded-lg self-center text-center relative">
				<div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className="sm:h-6/12 sm:w-auto bg-blue-500 flex justify-center inline-block mx-10 my-8 p-4 flex-col leading-8 border-2 border-blue-900 rounded-lg shadow-md">
					<form method="post" action="login.php" onsubmit="return validate(this)">
					<label className="w-screen clearfix" for="uname"><b>Username</b></label>
					<input className="w-full px-4 rounded-full clearfix" type="text" placeholder="Enter Username" name="uname" required />
					<label className="w-screen clearfix" for="psw"><b>Password</b></label>
					<input className="w-full px-4 rounded-full clearfix" type="password" placeholder="Enter Password" name="psw" required />
					</form>
					<Link to="/Authenticated">
						<Button buttonText="Login" />
					</Link>
					<Link to="/accountRegister">
						<Button buttonText="Create Account"/>
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
