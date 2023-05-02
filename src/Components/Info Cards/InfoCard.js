import React from 'react';

function InfoCard() {
  return (
    <div className="info_card selection:bg-teal-200 selection:text-cyan-800">
        <div>
            <img src="https://placehold.co/400x400" className="w-full"></img>
        </div>
        <h3 className="text-teal-300 text-3xl">Title</h3>
        <p className="px-4 pb-3 text-slate-300 text-lg text-center">Description - Quis excepteur quis aliqua qui reprehenderit officia sunt sit duis id proident est laborum ex. Ut et et voluptate officia sit exercitation quis. Lorem anim incididunt amet exercitation eiusmod nulla Lorem exercitation est nostrud anim cillum nulla.</p>
        <div className="h-px w-3/4 bg-slate-300"></div>
        <div className="pt-3 flex flex-row flex-wrap items-center justify-center text-teal-300 text-md text-center">
            <p className="px-1">Technology 1</p>
            <p className="px-1">Technology 2</p>
            <p className="px-1">Technology 3</p>
            <p className="px-1">Technology 4</p>
            <p className="px-1">Technology 5</p>
        </div>
    </div>
  );
}

export default InfoCard;