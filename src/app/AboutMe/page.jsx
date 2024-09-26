import { FaLaptop, FaUtensils, FaLeaf } from 'react-icons/fa'; // Example icons

export default function AboutMe() {
  return (
    <section id="about-me" className="py-12 px-6 bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Left Column */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
  Hi, I am  Majeedat, a passionate software developer with a love for adventure and new experiences.
  When I am not coding, you might find me exploring nature, tending to my plants, or enjoying delicious food.
  
</p>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center space-x-2 text-white">
              <FaUtensils className="text-2xl text-yellow-500" />
              <span>Food Lover</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <FaLaptop className="text-2xl text-yellow-500" />
              <span>Coding</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <FaLeaf className="text-2xl text-yellow-500" />
              <span>Nature and Plants</span>
            </div>
            {/* Add more hobbies/interests as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
