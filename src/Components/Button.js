import React from 'react';

export default function Button(props) {
    return <button style={{outline: 0}} className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded m-3">{props.buttonText}</button>;
};