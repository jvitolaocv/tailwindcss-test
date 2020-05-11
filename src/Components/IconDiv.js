import React from 'react';

export default function IconDiv(props) {
    return(
        <div className="bg-green-300 rounded-lg h-32 w-32 py-8 px-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            {props.icon}
            <h6 className="text-center font-sans text-xl font-medium tracking-wider antialiased py-2">{props.iconName}</h6>
        </div>
    );
};