import React from 'react';
import './App.css';

export default function App() {
	return (
		<div className="text-center">
			<div className="border-double border-4 container">
				<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
					Blue Button
				</button>
				<button className="btn btn-blue">Find Groups</button>
				<div className="bg-gray-200 border border-gray-800 text-white-600 px-4 py-3 rounded relative my-5"role="alert">
					<span className="block sm:inline">Please sign in below.</span>
				</div>
			</div>
			<div>
				<h1 className="text-gray-700 text-3xl">Sign in</h1>
					<form action="">
						<div>
							<input type="email" placeholder="Email" class="border rounded w-full py-2 px-4 outline-none focus:shadow-outline"></input>
						</div>
						<div>
							<input type="password" placeholder="Password" class="border
							rounded w-full py-2 px-4 outline-none focus:shadow-outline"></input>
						</div>
						<div>
							<label for=""><input type="checkbox">Remember me</input>
							</label>
						<a href="">Forgot email or password?</a>
						</div>
						<div>
							<button>Register</button>
							<button>Sing in</button>
						</div>

					</form>
			</div>
			<div className="my-6 max-w-lg mx-auto flex p-5 bg-gray-200 rounded-lg shadow-xl space-x-6">
				<button className="ml-8 bg-green-600 rounded-full px-5 py-4 shadow-lg text-green-200 hover:bg-green-500">
          Button One
        </button>
        <button className="self-center bg-green-600 rounded-full px-5 py-4 shadow-lg text-green-200 hover:bg-green-500">
          Button Two
        </button>
        <button className="bg-green-600 rounded-full px-4 py-4 shadow-lg text-green-200 hover:bg-green-500">
          Button Three
        </button>
			</div>
        <div className="absolute inset-x-0 bottom-0 h-7 bg-black text-white text-left">
          <strong className="font-bold">This website is powered by OCVapps!</strong>
        </div>
      </div>
	);
};
