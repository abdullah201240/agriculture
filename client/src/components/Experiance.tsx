"use client";
import React from 'react';


export default function Experiance() {
  

 

  return (
    <div>
      <div
        className={"relative w-full h-auto py-8 bg-cover bg-center"}
        style={{ backgroundImage: "url('Experiance.webp')" }} // Replace with your image path
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black mx-auto max-w-6xl px-4 mt-12">
          <div className="py-4 px-4 flex flex-col items-start border-l-8 border-[#20a320] ">
            <h2 className="text-4xl font-bold text-left text-black">10</h2> 
            <p className="text-sm text-left text-gray-600">Successful Implementations</p>
          </div>

          <div className="py-4 px-4 flex flex-col items-start border-l-8 border-[#20a320] ">
            <h2 className="text-4xl font-bold text-left text-black">10</h2>
            <p className="text-sm text-left text-gray-600">Dedicated Agro-Tech Experts</p>
          </div>

          <div className="py-4 px-4 flex flex-col items-start border-l-8 border-[#20a320]">
            <h2 className="text-4xl font-bold text-left text-black">10</h2>
            <p className="text-sm text-left text-gray-600">Empowered Farmers</p>
          </div>

          <div className="py-4 px-4 flex flex-col items-start border-l-8 border-[#20a320]">
            <h2 className="text-4xl font-bold text-left text-black">10</h2>
            <p className="text-sm text-left text-gray-600">Years of Agricultural Innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
