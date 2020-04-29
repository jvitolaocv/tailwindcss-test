import React from 'react';

export default function IconDiv(props) {
    return(
        <div className="flex-shrink-0 bg-blue-500 py-6 border-4 rounded-lg m-4 h-48 w-48">
            <div className="bg-white rounded-lg border-2 h-32 w-32 py-8 px-6 m-auto">
                {props.icon}
                <h6 className="text-center font-serif text-lg tracking-wider antialiased py-2">{props.iconName}</h6>
            </div>
        </div>
    );
};