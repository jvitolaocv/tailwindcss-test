import React from "react";
import OCVLogo from './myocv.png';
import {Link} from "react-router-dom";

export default function Page(props) {
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
            <div className="flex justify-end">
                <Link to="/"><div><button className="bg-red-700 rounded-full px-2 py-2 shadow-lg text-white hover:bg-red-600">Log out</button></div>
				</Link>
            </div>
        <div className="flex justify-around absolute inset-x-0 bottom-0 h-7 bg-black text-white w-screen">
          <strong className="font-bold self-center">This website is powered by OCVapps!</strong>
          <img className="w-24 h-12 m-4" src = {OCVLogo} alt="OCV Logo"/>
        </div>
      </div>
    );
}