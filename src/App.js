import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BackupIcon from '@material-ui/icons/Backup';
import GetAppIcon from '@material-ui/icons/GetApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import TwitterIcon from '@material-ui/icons/Twitter';
import './App.css';

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="bg-white max-w-xl mx-auto rounded-lg mt-4 mb-4 h-15">
					<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded m-5">
						My Account
					</button>
				</div>
			</div>
			<div className="max-w-4xl mx-auto flex flex-wrap p-6 bg-white rounded-lg shadow-xl justify-evenly content-center">
				<div className="flex-shrink-0 bg-blue-500 p-16 border-4 rounded-lg m-4 h-48 w-48">
					<div className="bg-white rounded-lg border-2 p-auto m-auto flex-col">
						<SettingsIcon />
						<h6 className="text-center font-serif text-xs tracking-wider antialiased">Settings</h6>
					</div>
				</div>
				<div className="flex-shrink-0 bg-blue-500 py-16 px-16 border-4 rounded-lg m-4 h-48 w-48">
					<div className="bg-white rounded-lg border-2 p-auto m-auto flex-col">
						<ArrowForwardIosIcon />
						<h6 className="text-center font-serif text-xs tracking-wide antialiased">Terminal</h6>
					</div>
				</div>
				<div className="flex-shrink-0 bg-blue-500 py-16 px-16 border-4 rounded-lg m-4 h-48 w-48">
					<div className="bg-white rounded-lg border-2 p-auto m-auto flex-col">
						<BackupIcon />
						<h6 className="text-center font-serif text-xs tracking-wider antialiased">Upload</h6>
					</div>
				</div>
				<div className="flex-shrink-0 bg-blue-500 py-16 px-16 border-4 rounded-lg m-4 h-48 w-48">
					<div className="bg-white rounded-lg border-2 p-auto m-auto flex-col">
						<GetAppIcon />
						<h6 className="text-center font-serif text-xs antialiased">Download</h6>
					</div>
				</div>
				<div className="flex-shrink-0 bg-blue-500 py-16 px-16 border-4 rounded-lg m-4 h-48 w-48">
					<div className="bg-white rounded-lg border-2 p-auto m-auto flex-col">
						<VpnKeyIcon />
						<h6 className="text-center font-serif text-xs tracking-wider antialiased">Encrypt</h6>
					</div>
				</div>
				<div className="flex-shrink-0 bg-blue-500 py-16 px-16 border-4 rounded-lg m-4 h-48 w-48">
					<div className="bg-white rounded-lg border-2 p-auto m-auto flex-col">
						<TwitterIcon />
						<h6 className="text-center font-serif text-xs tracking-wider antialiased">Social Media</h6>
					</div>
				</div>
			</div>
		</div>
	);
};