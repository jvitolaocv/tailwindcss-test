import React from 'react';

export default function Button(props) {
    return <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 rounded m-5">{props.buttonText}</button>;
};