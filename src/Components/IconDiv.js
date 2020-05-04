import React from 'react';

export default function IconDiv(props) {
    return(
        <div className="bg-blue-600 rounded-lg border-2 border-blue-500 h-32 w-32 py-8 px-6 m-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            {props.icon}
            <h6 className="text-center font-serif text-lg tracking-wider antialiased py-2">{props.iconName}</h6>
        </div>
    );
};