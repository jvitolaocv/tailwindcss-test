import React from 'react';
import Button from './Button';
import './SelectedOption.css';

export default function SelectedOption(props) {
    return (
        props.terminal ?  
            <div className="bg-black w-full h-64 rounded-lg">
                <p className="blinking text-green-400 pt-6 pl-6 text-left">> Terminal!</p>
            </div>
            : <div className="bg-blue-500 w-full h-64 rounded-lg">
                {props.text === "Encrypt!" ? <div className="flex flex-col items-center pt-20">
                    <input className="w-64 px-4 mx-4 rounded-full" type="text" placeholder="Enter value to encrypt..." name="input" required />
                    <Button buttonText="Encrypt!" />
                </div> : <div></div>}
                {props.text === "Upload!" ? <div className="flex flex-col items-center pt-24">
                    <Button buttonText="Upload!" />
                </div> : <div></div>}
            </div>
    );
};