import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BackupIcon from '@material-ui/icons/Backup';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {Link} from "react-router-dom";
import IconDiv from './Components/IconDiv';
import Button from './Components/Button';

export default function Authenticated() {
    return (
        <div className="container text-center">
            <div className="bg-white max-w-xs mx-auto rounded-lg my-6 h-15 justify-evenly">
                <Button buttonText="Account" />
                <Link to="/"><Button buttonText="Logout" /></Link>
            </div>
            <div className="max-w-screen mx-auto flex flex-wrap p-8 bg-white rounded-lg shadow-xl justify-evenly content-center my-6">
                <IconDiv icon={<SettingsIcon />} iconName="Settings" />
                <IconDiv icon={<ArrowForwardIosIcon />} iconName="Terminal" />
                <IconDiv icon={<BackupIcon />} iconName="Upload" />
                <IconDiv icon={<VpnKeyIcon />} iconName="Encrypt" />
            </div>
        </div>
    );
};