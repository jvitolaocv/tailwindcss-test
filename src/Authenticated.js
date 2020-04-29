import React, {useState} from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BackupIcon from '@material-ui/icons/Backup';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {Link} from "react-router-dom";
import IconDiv from './Components/IconDiv';
import Button from './Components/Button';
import SelectedOption from './Components/SelectedOption';

export default function Authenticated() {
    const [selectedItem, setSelectedItem] = useState("None");
    
    return (
        <div className="container flex h-screen w-screen justify-center">
            <div className="h-auto w-auto p-8 bg-blue-600 rounded-lg self-center text-center relative">
                <div className="bg-blue-500 max-w-xs mx-auto rounded-lg justify-evenly">
                    <Button buttonText="Account" />
                    <Link to="/"><Button buttonText="Logout" /></Link>
                </div>
                <div className="max-w-screen mx-auto flex flex-wrap p-8 bg-blue-500 rounded-lg shadow-xl justify-evenly content-center my-6">
                    <button style={{outline: 0}} className="flex-shrink-0 m-4" onClick={() => (selectedItem !== "Settings" ? setSelectedItem("Settings") : setSelectedItem("None"))}><IconDiv icon={<SettingsIcon />} iconName="Settings" /></button>
                    <button style={{outline: 0}} className="flex-shrink-0 m-4" onClick={() => (selectedItem !== "Terminal" ? setSelectedItem("Terminal") : setSelectedItem("None"))}><IconDiv icon={<ArrowForwardIosIcon />} iconName="Terminal" /></button>
                    <button style={{outline: 0}} className="flex-shrink-0 m-4" onClick={() => (selectedItem !== "Upload" ? setSelectedItem("Upload") : setSelectedItem("None"))}><IconDiv icon={<BackupIcon />} iconName="Upload" /></button>
                    <button style={{outline: 0}} className="flex-shrink-0 m-4" onClick={() => (selectedItem !== "Encrypt" ? setSelectedItem("Encrypt") : setSelectedItem("None"))}><IconDiv icon={<VpnKeyIcon />} iconName="Encrypt" /></button>
                </div>
                <div>
                    {selectedItem === "Settings" ? <SelectedOption text="Settings!" /> : <div></div>}
                    {selectedItem === "Terminal" ? <SelectedOption terminal={true} /> : <div></div>}
                    {selectedItem === "Upload" ? <SelectedOption text="Upload!" /> : <div></div>}
                    {selectedItem === "Encrypt" ? <SelectedOption text="Encrypt!" /> : <div></div>}
                </div>
            </div>
        </div>
    );
};