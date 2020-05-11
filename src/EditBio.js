import React from 'react';

export default function EditBio(props) {
   return (
      <div className="container flex-col bg-green-400 h-screen w-screen text-center rounded-lg "> 
         <div className="container bg-blue-300 h-4 w-20 my-4 rounded-lg" type='text' placeholder="Enter bio" />
         <input className="w-64 py-4 my-4 rounded-full" type="text" placeholder="Enter bio ..." name="bio" />
         <div className="container bg-red-500 h-4 w-20 my-4 rounded-md" />
      </div>
   )
};

