'use client'
import { useState } from 'react';
import { FaGlobe, FaLaptopCode, FaUtensils, FaChurch, FaLaughBeam, FaHandsHelping } from 'react-icons/fa'; 

export default function WhatImLookingFor() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="what-im-looking-for" className="py-12 px-6 bg-blue-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">What I am Looking For</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div
            className="relative w-full md:w-1/4 p-6 bg-gray-700 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
            onMouseEnter={() => setHoveredCard('religious')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaChurch className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white">Religious</h3>
            {hoveredCard === 'religious' && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white p-4 rounded-lg flex items-center justify-center">
                <p className="text-center">Someone who values faith and spiritual growth.</p>
              </div>
            )}
          </div>
          {/* Card 2 */}
          <div
            className="relative w-full md:w-1/4 p-6 bg-gray-700 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
            onMouseEnter={() => setHoveredCard('tech-savvy')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaLaptopCode className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white">Tech-Savvy</h3>
            {hoveredCard === 'tech-savvy' && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white p-4 rounded-lg flex items-center justify-center">
                <p className="text-center">A tech enthusiast who enjoys discussing the latest gadgets and innovations.</p>
              </div>
            )}
          </div>

          {/* Card 3 */}
          <div
            className="relative w-full md:w-1/4 p-6 bg-gray-700 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
            onMouseEnter={() => setHoveredCard('food-lover')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaUtensils className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white">Loves to Cook</h3>
            {hoveredCard === 'food-lover' && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white p-4 rounded-lg flex items-center justify-center">
                <p className="text-center">Someone who enjoys trying new recipes and sharing delicious meals.</p>
              </div>
            )}
          </div>

          {/* Card 4 */}


          <div
            className="relative w-full md:w-1/4 p-6 bg-gray-700 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
            onMouseEnter={() => setHoveredCard('adventurous')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaGlobe className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white">Adventurous</h3>
            {hoveredCard === 'adventurous' && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white p-4 rounded-lg flex items-center justify-center">
                <p className="text-center">Someone who loves exploring new places and trying new things.</p>
              </div>
            )}
          </div>

          
          

          {/* Card 5 */}
          <div
            className="relative w-full md:w-1/4 p-6 bg-gray-700 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
            onMouseEnter={() => setHoveredCard('funny')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaLaughBeam className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white">Funny</h3>
            {hoveredCard === 'funny' && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white p-4 rounded-lg flex items-center justify-center">
                <p className="text-center">Someone with a great sense of humor who can make me laugh.</p>
              </div>
            )}
          </div>

          {/* Card 6 */}
          <div
            className="relative w-full md:w-1/4 p-6 bg-gray-700 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
            onMouseEnter={() => setHoveredCard('compassionate')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FaHandsHelping className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white">Compassionate</h3>
            {hoveredCard === 'compassionate' && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white p-4 rounded-lg flex items-center justify-center">
                <p className="text-center">Someone who is kind-hearted and empathetic towards others.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
