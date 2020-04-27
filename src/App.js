import React from 'react';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<div class="container">
				<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
					Blue Button
				</button>
				<button class="btn btn-blue">Find Groups</button>
				<div class="bg-red-100 border bordder-red-400 text-red-700 px-4 py-3 rounded relative my-5"role="alert">
					<strong class="font-bold">Alert!</strong>
					<span class="block sm:inline">Please update your password</span>
				</div>
			</div>
			<div class="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
				<div class="flex-shrink-0"></div>
			</div>
		</div>
	);
};
