import React from 'react';

export default function SelectedOption(props) {
    return (
        props.terminal ?  
            <div className="bg-black w-full h-64 rounded-lg">
                <p className="text-green-400 pt-6 pl-6 text-left">> Terminal!</p>
            </div>
            : <div className="bg-blue-500 w-full h-64 rounded-lg">
                <p className="inline-block m-auto pt-16">{props.text}</p>
            </div>
    );
};