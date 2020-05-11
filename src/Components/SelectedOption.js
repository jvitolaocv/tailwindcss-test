import React from 'react';
import Button from './Button';
import './SelectedOption.css';
import {Link} from 'react-router-dom';

export default function SelectedOption(props) {
    return (
        props.terminal ?
            <div className="bg-black w-full h-40 rounded-lg"> 
                <p className="blinking pt-6 pl-6 text-left">> Terminal!</p>
            </div>
            : <div className="bg-blue-500 w-full h-40 rounded-lg">
                
                {props.text === "Encrypt!" ? <div className="flex flex-col items-center pt-10">
                    <input className="w-64 px-4 mx-4 rounded-full" type="text" placeholder="Enter value to encrypt..." name="input" required />
                    <Button buttonText="Encrypt!" />
                </div> : <div></div>}

                {props.text === "Upload!" ? <div className="flex flex-col items-stretch pt-12">
                    <Button buttonText="Upload!" />
                </div> : <div></div>}

                {props.text === "Settings!" ? <div className="flex flex-row justify-center items-center pt-12">
                    <Link to='/EditBio'>
						<Button buttonText="Bio"/>
					</Link>
                    <Button buttonText="Change Username" />
                    <Button buttonText="Change Password" />
                    <Button buttonText="Enable Dark Mode" />
                </div> : <div></div>}
            </div>
    );
};