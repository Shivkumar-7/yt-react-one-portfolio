import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="text-xl mt-20 space-y-4">
          <p className="bg-gray-700 p-4 rounded-lg shadow-md">
            Hi Everyone, I am <span className="text-cyan-400 font-semibold">Shiv Kumar</span> from <span className="text-cyan-400 font-semibold">Aligarh, Uttar Pradesh, India</span>.
            <br></br>
            I am a Pre-final year student pursuing <span className="text-cyan-400 font-semibold">Bachelor of Technology</span> in <span className="text-cyan-400 font-semibold">Electronics and Communication Engineering</span> from the <span className="text-cyan-400 font-semibold">Institute of Engineering and Technology, Lucknow</span>.
          </p>

          <p className="bg-gray-700 p-4 rounded-lg shadow-md">
            I have a good understanding of CS Fundamentals including:
            <ul className="pl-8">
              <li className="text-cyan-400">💡 Data Structures and Algorithms</li>
              <li className="text-cyan-400">🗃️ Database Management System</li>
              <li className="text-cyan-400">🧱 Object-Oriented Programming</li>
              <li className="text-cyan-400">🖥️ Operating Systems</li>
              <li className="text-cyan-400">🛠️ System Design</li>
            </ul>
          </p>

          {/* <p className="bg-gray-700 p-4 rounded-lg shadow-md">
            I am proficient in Web Development and actively participate in Competitive Programming contests on various platforms like:
            <ul className="pl-8">
              <li className="text-cyan-400 font-semibold">⚡ Codeforces</li>
              <li className="text-cyan-400 font-semibold">🚀 Leetcode</li>
              <li className="text-cyan-400 font-semibold">🏆 CodeChef</li>
              <li className="text-cyan-400 font-semibold">🌍 AtCoder</li>
            </ul>
          </p> */}
          
        </div>
      </div>
    </div>
  );
};

export default About;
