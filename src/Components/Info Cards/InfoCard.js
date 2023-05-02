import React from 'react';

function InfoCard() {
  return (
    <div className="info_card selection:bg-teal-200 selection:text-teal-800">
        <div>
            <img src="https://placehold.co/400x400" className="w-full"></img>
        </div>
        <h3 className="py-3 text-teal-300 text-3xl">Title</h3>
        <div className="h-px w-[90%] bg-slate-300"></div>
        <p className="px-4 py-2 text-slate-200 text-lg text-justify">Description - Ut et et voluptate officia sit exercitation quis. Lorem anim incididunt amet exercitation eiusmod nulla Lorem exercitation est nostrud anim cillum nulla.</p>
        <div className="h-px w-[90%] bg-slate-300"></div>
        <div className="py-3 flex flex-row flex-wrap items-center justify-center text-teal-300 text-md text-center">
            <p className="px-1">Technology 1</p>
            <p className="px-1">Technology 2</p>
            <p className="px-1">Technology 3</p>
            <p className="px-1">Technology 4</p>
            <p className="px-1">Technology 5</p>
        </div>
        <div className="w-full pb-3 flex flex-row items-center justify-around text-slate-100 text-lg font-['Work_Sans']">
            <button className="w-36 h-12 bg-yellow-500">view</button>
            <button className="w-36 h-12 bg-yellow-500">github</button>
        </div>
    </div>
  );
}

export default InfoCard;