import React from 'react';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<div className="border-double border-4 container">
				<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
					Blue Button
				</button>
				<button className="btn btn-blue">Find Groups</button>
				<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5"role="alert">
					<strong className="font-bold">Alert!</strong>
					<span className="block sm:inline">Please update your password</span>
				</div>
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
